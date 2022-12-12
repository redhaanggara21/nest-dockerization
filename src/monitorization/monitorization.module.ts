import { Module } from "@nestjs/common";
import { AnyOtherModuleModule } from "./any-other-module/any-other-module.module";
import { HealthModule } from "./health/health.module";
import { MetricsModule } from "./metrics/metrics.module";
import { PrometheusModule } from "./prometheus/prometheus.module";

@Module({
    imports: [
      HealthModule,
      PrometheusModule,
      AnyOtherModuleModule,
      MetricsModule,
    ]
  })
  export class MonitorizationModule {}