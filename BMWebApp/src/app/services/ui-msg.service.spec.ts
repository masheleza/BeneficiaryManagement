import { TestBed } from '@angular/core/testing';

import { UiMsgService } from './ui-msg.service';

describe('UiMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UiMsgService = TestBed.get(UiMsgService);
    expect(service).toBeTruthy();
  });
});
