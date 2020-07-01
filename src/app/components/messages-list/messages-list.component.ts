import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message';


@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
messages:Message[];
isLoading: boolean;
  constructor(private messageService:MessagesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.messageService.getAllMessages().subscribe((data) => {
      this.messages = data;
      this.isLoading = false; 
    });

  }

}
