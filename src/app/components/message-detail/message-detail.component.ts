import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { Message } from 'src/app/models/message';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.css'],
})
export class MessageDetailComponent implements OnInit {
  isLoading: boolean;
  message: Message;
  messages: Message[];
  modalRef: BsModalRef;
  messageModal: string;

  constructor(
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.messageService.getOneMessage(id).subscribe((data) => {
      this.message = data;
      this.isLoading = false;
    });
  }
  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe((then) => {
      this.messageService.getAllMessages().subscribe((data: Message[]) => {
        this.messages = data;
        this.router.navigate(['/home']);
        this.isLoading = false;
        this.modalRef.hide();
      });
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.messageModal = 'Confirmed!';
  }
 
  decline(): void {
    this.messageModal = 'Declined!';
    this.modalRef.hide();
  }
}

