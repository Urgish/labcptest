import { TestBed, inject } from '@angular/core/testing';

import { TemperatureMonitorService } from './temperature-monitor.service';

describe('TemperatureMonitorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TemperatureMonitorService]
    });
  });

  it('should be created', inject([TemperatureMonitorService], (service: TemperatureMonitorService) => {
    expect(service).toBeTruthy();
  }));
});
