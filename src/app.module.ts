import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SMTPMailService } from './mail/smtp-mail-service';
import { MailService } from './mail/mail.service';
import { PostMarkMailService } from './mail/postmark-mail-service';
import { HttpModule } from './http.modules';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: PostMarkMailService
    }
  ],
})
export class AppModule {}
