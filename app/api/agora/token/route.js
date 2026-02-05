import { NextResponse } from 'next/server';
import { RtcTokenBuilder, RtcRole } from 'agora-token';

export async function POST(req) {
  try {
    const { channelName, uid } = await req.json();

    const appId = 'd0344f399b87424bb9a0c8c691ddbf27';
    const appCertificate = 'YOUR_APP_CERTIFICATE_FROM_CONSOLE'; // <--- MUST ADD THIS
    
    if (!appCertificate) {
      return NextResponse.json({ error: 'App Certificate is missing' }, { status: 500 });
    }

    const role = RtcRole.PUBLISHER;
    const expirationTimeInSeconds = 3600; // 1 hour
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    // Build the token
    const token = RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCertificate,
      channelName,
      uid,
      role,
      privilegeExpiredTs,
      privilegeExpiredTs // Separate field for privilege expiration in v2
    );

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}