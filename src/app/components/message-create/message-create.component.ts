import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent implements OnInit {
message = new Message();
  constructor(public messageService:MessagesService, public router:Router) { }

  ngOnInit(): void {
  }

  submitMessage(): void {
    // APPEL DE LA FONCTION DU message SERVICE
    this.messageService.addMessage(this.message).subscribe(data => {

      this.router.navigate(['/home']);
    });
  }

}
