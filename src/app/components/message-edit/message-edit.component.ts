import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  message: Message;
  id: number;
  isLoading: boolean;

  constructor(public router:Router, public route:ActivatedRoute, public messageService:MessagesService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.messageService.getOneMessage(this.id).subscribe((data) => {
      this.message = data;
      this.isLoading = false;
    });

  }
  editMessage() {
    this.messageService.editMessage(this.message).subscribe((then) => {
      this.router.navigate(['/home']);
    });
  }
}
