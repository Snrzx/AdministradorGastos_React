# React + Vite
Esta aplicación web, construida con React y Vite, es una herramienta diseñada para ayudar a los usuarios a gestionar sus gastos de manera eficiente. Permite establecer un presupuesto y realizar un seguimiento detallado de los ingresos y egresos. Proporciona una interfaz intuitiva para crear y administrar presupuestos personales. Los usuarios pueden agregar gastos, categorizarlos y visualizar su progreso hacia sus objetivos financieros.

## Página inicial - Definir Presupuesto

A continuación, se muestra la pantalla inicial, donde se define el presupuesto inicial.

![Captura de pantalla 2024-08-25 224251](https://github.com/user-attachments/assets/fe1e8848-12d0-44f8-a0c8-89e557ab74fb)

## Página Principal - Control de Gasto
Al definir un presupuesto válido, se mostrará la pantalla principal. En donde habrá distinta información como: El presupuesto actual, (en este caso, $500), el presupuesto gastado total, y el presupuesto disponible, así como también la estadística de cuánto se ha gastado en total. También, habrá un botón que reiniciará la app en caso de haber completado con el presupuesto y querer agregar otro presupuesto distinto. 

En caso de que el presupuesto no sea válido, aparecerá un error indicando que el presupuesto no ha sido válido, impidiendo ir a la pantalla principal a menos de que se ingrese un presupuesto válido.

Muestra de la pantalla principal. Abajo, a la izquierda, se puede apreciar un botón con un signo de "+", el cuál funciona para comenzar añadir gastos.

![Captura de pantalla 2024-08-25 231555](https://github.com/user-attachments/assets/6618742b-bcd6-4ea4-adc1-cfff573da254)

## Modal - Añadir un gasto
Al precionar dicho botón, se activará un modal con un pequeño formulario para completar la información de un gasto y luego mostrarla en la pantalla principal. Dicha información de gastos se almacenará en LocalStorage, asegurando así la existencia de cada gasto aún luego de cerrar la página y volver a abrirla.

![Captura de pantalla 2024-08-25 232453](https://github.com/user-attachments/assets/1e23228d-1366-4a14-8d65-c6a2da43791a)

## Lista de Gastos
Al añadir dicho gasto, se habrán realizados cálculos automáticamente que indicarán el presupuesto disponible, el gasto total, y el porcentaje de lo gastado en total.

Así como también, se añadirá el gasto realizado en la lista de gastos; lugar dónde se podrá ver cada gasto realizado.

![Captura de pantalla 2024-08-25 232920](https://github.com/user-attachments/assets/763aa203-8063-493e-8e94-81e886dfe7c5)

## Editar o Eliminar Gasto
Al deslizar cada gasto a la derecha o izquierda, será posible editar o eliminarlo.

![Captura de pantalla 2024-08-25 235347](https://github.com/user-attachments/assets/3f231a20-89f0-4437-83d4-27cfe8c0c51e)

## Editando Gasto
En caso de editarlo, se activará de nuevo el modal, rellenando los campos automáticamente con la información almacenada en LocalStorage de cada gasto. Información que se editará únicamente en caso de añadir el gasto presionando el botón. 
En caso contrario, la información de LocalStorage no se editará en lo absoluto.

![Captura de pantalla 2024-08-25 235506](https://github.com/user-attachments/assets/5d0564fa-5dac-4892-a011-fd8585a93198)
![image](https://github.com/user-attachments/assets/71c26a1d-e89a-4a5f-8175-f4a36a9386d3)

## Eliminando Gasto
En caso de eliminar, con una pequeña animación, dicho gasto será eliminado. Así como también, automáticamente la app recalculará de nuevo lo gastado. Aumentando el presupuesto disponible y disminuyendo el total del presupuesto gastado. En este caso, se ha eliminado el gasto de "Ropa".

![image](https://github.com/user-attachments/assets/681ec981-e240-4e26-b84c-1a2ced5b335e)

## Filtrar por categoria
También es posible filtrar por categoria.

![image](https://github.com/user-attachments/assets/25cae613-8c4b-4e6e-bf5b-65e18aa8eaaa)

## Categoria inexistente
Y en caso de que se filtre por una categoria en la que no existan gastos.

![image](https://github.com/user-attachments/assets/e4e5c73f-04a5-4164-977d-26ba46af9378)

## Exceder el presupuesto.

En caso de superar el presupuesto establecido, la app te indicará resaltándote en rojo que te has excedido del presupuesto que has establecido. Esto, con el fin de no limitar al usuario con los gastos que realice, sino que sea consciente de todos los gastos que ha realizado y en qué ha gastado su presupuesto.

![image](https://github.com/user-attachments/assets/1c98c22b-c228-4a27-bac8-99ada344ec77)

## Reiniciar la App
En caso de querer reiniciar la App para añadir un nuevo presupuesto inicial o similar, es posible presionar el botón de la página principal. Al hacerlo, la página nos preguntará que si en verdad queremos reiniciar la app, y en caso de confirmar, seremos llevados de nuevo a la página inicial, donde se define el presupuesto inicial.
