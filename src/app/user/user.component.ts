import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Segment } from '../state-management/state/segment.state';
import { UserService } from '../services/users.service';
import { Users } from '../services/users.model';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';

@Component({
    selector: 'app-user-cmp',
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {

    private basePath = '/users';

    id: any;

    private sub: any;

    users: Users = new Users();

    user: any;

    submitted = false;

    registration: any;

    dateCad: any;

    dateAct: any;

    random: any;

    genres: any;

    isEdit = false;

    title = 'Cadastrar Usuário';

    subtitle = 'Usuário criado com sucesso!';



    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UserService,
        private store: Store<Segment>) {
    }

    ngOnInit() {
        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const mes = dataAtual.getMonth();
        const dia = dataAtual.getDate();
        const generateNumber = this.getRandomInt(1, 9999);
        this.random = this.getRandomInt(1, 9999);

        this.users.active = true;

        this.genres = [{ name: 'Homem' }, { name: 'Mulher' }, { name: 'Outro' }];
        this.dateAct = ano + '-' + mes + '-' + dia;
        this.dateCad = ano + '-' + mes + '-' + dia;
        this.registration = ano + '' + mes + '' + dia + '' + generateNumber;

        this.sub = this.route.params.subscribe(params => {
            this.id = params.id;
        });

        this.userService.getListData(this.basePath).snapshotChanges().pipe(
            map(changes =>
              changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
            )
          ).subscribe(users => {
            users.map((item) => {
                if (this.id && item.registration === this.id.toString()) {
                    this.users = item;
                    this.isEdit = !this.isEdit;
                    this.title = 'Editar Usuário';
                    this.subtitle = 'Usuário atualizado com sucesso!';
                }
            });
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.isEdit) {
            this.updateUser();
        } else {
            this.saveUser();
        }
    }

    updateUser() {
        this.userService.updateUser(this.basePath, this.users.key, this.users);
    }

    saveUser() {
        this.users.registration = this.registration;
        this.users.dateAct = this.dateAct;
        this.users.dateCad = this.dateCad;

        this.userService.createUser(this.basePath, this.users);
        this.users = new Users();
    }

    newUser(): void {
        this.submitted = false;
        this.users.active = true;
        this.router.navigate(['/user']);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
