export type MonthlyVisitors = { month: string; count: number };

export async function getMonthlyVisitors(): Promise<MonthlyVisitors | null> {
  const endpoint = process.env.NAFAS_MONTHLY_VISITORS_ENDPOINT;
  if (!endpoint) return null;
  try {
    const response = await fetch(endpoint, { cache: 'no-store' });
    if (!response.ok) return null;
    const data: unknown = await response.json();
    if (!data || typeof data !== 'object' || !('count' in data) || !('month' in data)) return null;
    const { count, month } = data;
    if (!Number.isSafeInteger(count) || Number(count) < 0 || typeof month !== 'string' || !/^\d{4}-\d{2}$/.test(month)) return null;
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kuala_Lumpur', year: 'numeric', month: '2-digit' }).formatToParts(new Date());
    const currentMonth = `${parts.find(part => part.type === 'year')?.value}-${parts.find(part => part.type === 'month')?.value}`;
    return month === currentMonth ? { month, count: Number(count) } : null;
  } catch { return null; }
}
