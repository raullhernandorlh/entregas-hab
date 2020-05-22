let Loan = require('loan');
let moment = require('moment');


const args = require('yargs')
    .option('precioDelInmueble', {
        alias: 'p',
    })
    .option('tipoInteres', {
        alias: 'i',
        default: 0.01
    })
    .option('mensualidades', {
        alias: 'm'
    })
    .option('fecha', {
        alias: 'f',
        default: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
    .demandOption('precioDelInmueble', 'El precio del inmueble es obligatorio')
    .demandOption('mensualidades','El numero de mensualidades es obligatorio')
    .argv
 
    let precioDelInmueble = args.precioDelInmueble;
    let tipoInteres = args.tipoInteres;
    let mensualidades = args.mensualidades;
    let fecha = args.fecha;



let loan = new Loan({
  interest_rate: tipoInteres,
  principal: precioDelInmueble, // Precio de la hipoteca
  pay_every: 'month',
  instalments: mensualidades, // Plazo en años . 12 meses = 1 año
  type: 'annuity',
  as_of: fecha,
});



console.log("Simulador de Hipotecas");
console.log("-------------------------");
let amortizacion =
{
    precio_inmueble : loan.principal,
    inmueble_mas_intereses : loan.principal + loan.amortize().data.total_cost.toFixed(2),
    mensualidades : loan.instalments,
    tipo_plazo : loan.pay_every,
    tipo_interes : loan.amortize().interest_rate * 100 + " %",
    fecha_inicio : fecha,
    pago_mensual : loan.amortize().to_pay.toFixed(2),
    amortizacion : loan.amortize().amortization.toFixed(2),
    intereses_mensuales : loan.amortize().interest.toFixed(2),
    intereses_totales : loan.amortize().data.total_cost.toFixed(2),
}


console.log(amortizacion)

 