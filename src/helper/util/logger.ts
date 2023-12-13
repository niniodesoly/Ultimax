import { transports, format, transport } from "winston";

export function options(scenarioName: string) {
    return {
        transports: [
            new transports.File({
                filename: `test-results/log/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({ format : 'DD-MM-YYYY HH:mm:ss'}),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)

                )
            })
        ]
    }
}
