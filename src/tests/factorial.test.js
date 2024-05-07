const factorial = {

    fact(a)
    {
    if (a==0 || a ===1)
        //si a =0 or a=1 , la factorial es 1
        {
            return 1; 

        }else 
        {
           
             for (const i=1; i<=a; i++)
               {
                    a*=i;
               }
                
            return a; 
            
        }
    },
    
}