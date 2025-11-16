import { dev } from './dev-log';
import { NextResponse } from 'next/server';

export const handleQuery = async (
  func: () => Promise<NextResponse>,
  errMessage: string
): Promise<NextResponse> => {
  try {
    return await func();
  } catch (err: unknown) {
    const message = err instanceof Error 
      ? `${errMessage}: ${err.message}`
      : `${errMessage}: ${String(err)}`;

    dev.log(message);

    return NextResponse.json({ error: message }, { status: 500 });
  }
};

/*
 Example Usage:
export async function GET() {
  return handleQuery(async () => {
    
    // Your DB or server logic here
    const data = { message: "Hello world!" };

    return NextResponse.json(data, { status: 200 });

  }, "Failed to fetch data");
}

*/