import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { Angulartics2 } from 'angulartics2';

@Component({
    selector: 'app-edit-completed-tours',
    templateUrl: './edit-completed-tours.component.html',
    styleUrls: ['./edit-completed-tours.component.css'],
})
export class EditCompletedToursComponent extends AppComponentBase implements OnInit, OnDestroy {
    constructor(
        injector: Injector,
        private _angulartics2: Angulartics2,
        private _appSessionService: AppSessionService
    ) {
        super(injector);
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {}
}
