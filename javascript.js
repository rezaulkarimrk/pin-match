
        function addNumber(id){
            const value = document.getElementById(id).innerHTML;

            let typeValue = document.getElementById('type-value').value;
            let totalValue =  typeValue+value;
            if(value == '&lt;'){
                if(totalValue=='&lt;'){
                    totalValue='';
                }
                totalValue = totalValue.slice(0, (totalValue.length-5))
            }
            else if(value =='C'){
                totalValue='';
            }
            document.getElementById('type-value').value=totalValue;
        }

        function setValue (id, value){
            document.getElementById(id).value=value;
        }
        document.getElementById('generateor').addEventListener('click', function(){
            const randNumber =(( Math.random()+1)*1000).toFixed(0);

            setValue('generateor-value', randNumber);
        });

        function findValue(id){
            const value = parseInt(document.getElementById(id).value);
            return value;

        }
        function resetValue(id){
            document.getElementById(id).value='';
        }
        document.getElementById('submit').addEventListener('click', function(){
            const generateValue=findValue('generateor-value');
            const typeValue = findValue('type-value');
            
            const haveTryBtn=document.getElementById('have-try')
            const  haveTry = parseInt(haveTryBtn.innerText)-1;
            haveTryBtn.innerText=haveTry+' try left';
            if(haveTry===0){
                document.getElementById('submit').disabled = true;
            }


            if(generateValue==typeValue){
                const show = document.getElementById('notify-match');
                show.style.display = 'block';
                const unmatch = document.getElementById('notify-unmatch');
                unmatch.style.display = 'none';
                
            }
            else{
                const show = document.getElementById('notify-match');
                show.style.display = 'none';
                const unmatch = document.getElementById('notify-unmatch');
                unmatch.style.display = 'block';
            }
            resetValue('generateor-value');
            resetValue('type-value');

        });