import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css']
})
export class MessageDetailComponent implements OnInit {
  isLoading:boolean;
  message:Message;

  constructor(private route: ActivatedRoute, private messageService:MessagesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getOneMessage(id).subscribe((data) => {
      this.message = data;
      this.isLoading = false;
    });

  }

}
