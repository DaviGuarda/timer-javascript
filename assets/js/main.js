function relogio(){
    function formatarDataSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        })
    }
    const relogio = document.querySelector('.relogio')
    const click = document.querySelector('.click')
    let segundos = 0;
    let timer;

    function iniciarRelogio(){
        timer = setInterval(function (){
            segundos++
            relogio.innerHTML = formatarDataSegundos(segundos)
        }, 1000)
    }

    document.addEventListener('click', function (e){
        const el = e.target;

        if(el.classList.contains('iniciar')){
            click.innerHTML = `Time iniciado:`
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciarRelogio()
        }

        if(el.classList.contains('pausar')){
            click.innerHTML = `Time pausado:`
            clearInterval(timer)
            relogio.classList.add('pausado')
        }

        if(el.classList.contains('zerar')){
            click.innerHTML = `Time zerado:`
            clearInterval(timer)
            relogio.classList.add('pausado')
            relogio.innerHTML = `00:00:00`
            segundos = 0;
        }
    })

}
relogio()