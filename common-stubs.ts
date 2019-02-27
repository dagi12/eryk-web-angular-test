import {UserService} from '../app/flota-web-angular-common/src/service/user/user.service';
import {BaseUser} from '../app/flota-web-angular-common/src/model/sample';
import {PostConfigService} from '../app/eryk-web-angular-common/src/service/post-config/post-config.service';
import {MyTitleService} from '../app/eryk-web-angular-common/src/service/my-title.service';
import {Observable} from 'rxjs/Observable';
import {CommonModalService} from '../app/eryk-web-angular-common/src/service/common-modal/common-modal.service';
import {CrudTableService} from '../app/eryk-web-angular-common/src/component/table/crud-table/crud-table.service';
import {MyToastService} from '../app/eryk-web-angular-common/src/service/my-toast.service';
import {FlotaConfig} from '../app/flota-web-angular-common/src/flota-config.interface';
import {ApiConfigService} from '../app/eryk-web-angular-common/src/service/api-config.service';
import {Modal} from 'ngx-modialog';
import {AttachmentService} from '../app/flota-web-angular-common/src/component/attachment/attachment.service';
import {PostUserService} from '../app/domain-login/post-user.service';
import {ErykConfig} from '../app/eryk-web-angular-common/src/eryk.interface';

const user = {
  userId: 0,
  rolaId: {
    rolaId: 0,
    firstLogin: true,
    administrator: true,
    enabled: true,
    agreementAccepted: true,
  },
  login: 'asd',
  auth: 'SALES',
  email: 'asd@asd.pl'
} as BaseUser;

export const userServiceStub: Partial<UserService> = {
  user: user
};

export const postConfigServiceStub: Partial<PostConfigService> = {
  postConfig: {
    version: 'asd',
    technicalSupportContactDetails: 'asd',
    attachmentSize: 5120,
  }
};

export const myTitleServiceStub: Partial<MyTitleService> = {
  observable: Observable.of({
    title: 'dupa',
    helpContent: 'dupa'
  }, {
    title: 'dupa2',
    helpContent: 'dupa2'
  })
};

export const commonModalServiceStub: Partial<CommonModalService> = {};

export const crudTableServiceStub: Partial<CrudTableService> = {
  lazy: () => {
    return Observable.of([{
      'dupa': 'dupa'
    }]);
  }
};

export const myToastServiceStub: Partial<MyToastService> = {};

export const flotaConfigStub: Partial<FlotaConfig> = {
  loginTitle: 'asd',
  clientSecret: 'asd',
  stateCallback: () => Observable.of(true).toPromise()
};

export const apiConfigServiceStub: Partial<ApiConfigService> = {};

export const modalStub: Partial<Modal> = {};

export const attachmentServiceStub: Partial<AttachmentService> = {};

export const postUserServiceStub: Partial<PostUserService> = {};

export const erykConfigStub: ErykConfig = {
  oauthApiUrl: '',
  baseUrl: ''
};
