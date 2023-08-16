import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Twilio Voice!';
  }

  async initiateCall(to: string, from: string) {
    const accountSid = process.env.ACCOUNT_SID;
    const authToken = process.env.AUTH_TOKEN;
    console.log('authtoken', authToken);
    const client = new Twilio(accountSid, authToken);

    try {
      const call = await client.calls.create({
        twiml: '<Response><Say>Hello from Twilio!</Say></Response>',
        to,
        from,
      });
      console.log(call.sid);
      return call;
    } catch (err) {
      return console.log(err);
    }
  }
}
