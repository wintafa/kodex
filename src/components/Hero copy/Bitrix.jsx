// import React, { useEffect } from 'react';

// const BitrixForm = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = 'https://cdn-ru.bitrix24.ru/b10715786/crm/form/loader_14.js';
//     script.async = true;

    
//     script.src += `?${Math.floor(Date.now() / 180000)}`;

    
//     const h = document.getElementsByTagName('script')[0];
//     h.parentNode.insertBefore(script, h);

    
//     return () => {
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//       }
//     };
//   }, []);

//   return <div data-b24-form="inline/14/23hh6g" data-skip-moving="true"></div>;
// };

// export default BitrixForm;

import { useEffect } from 'react';

const BitrixForm = ({ src, data }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn-ru.bitrix24.ru/b10715786/crm/form/loader_14.js';
        script.async = true;
        script.onload = () => {
          // Здесь можно добавить любые дополнительные действия после загрузки скрипта, если нужно
        };
    
        document.body.appendChild(script);
    
        // Удаляем скрипт при размонтировании компонента
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div>
          <div data-b24-form="inline/14/23hh6g" data-skip-moving="true"></div>
        </div>
      );
    };

export default BitrixForm