import { getMonthlyVisitors } from '@/lib/nafas/visitors';

export const dynamic = 'force-dynamic';

export async function GET() {
  const visitors = await getMonthlyVisitors();
  return Response.json(visitors ?? { month: null, count: null }, { headers: { 'Cache-Control': 'no-store' } });
}
