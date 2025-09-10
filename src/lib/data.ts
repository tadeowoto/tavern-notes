export const notes = [
  {
    id: 1,
    title: "Introducción a HTML",
    desc: "Aprender las etiquetas básicas de HTML y su estructura.",
    lenguages: ["HTML"],
    href: "/notes/1",
    content: `
      <h2>¿Qué es HTML?</h2>
      <p>HTML (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de una página web mediante etiquetas.</p>
      
      <h3>Estructura básica</h3>
      <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Mi primera página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;¡Hola Mundo!&lt;/h1&gt;
    &lt;p&gt;Este es mi primer párrafo.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

      <h3>Etiquetas principales</h3>
      <ul>
        <li><strong>&lt;h1&gt; - &lt;h6&gt;</strong>: Encabezados de diferentes niveles</li>
        <li><strong>&lt;p&gt;</strong>: Párrafos de texto</li>
        <li><strong>&lt;div&gt;</strong>: Contenedor genérico</li>
        <li><strong>&lt;span&gt;</strong>: Contenedor en línea</li>
        <li><strong>&lt;a&gt;</strong>: Enlaces</li>
        <li><strong>&lt;img&gt;</strong>: Imágenes</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: "Estilos con CSS",
    desc: "Cómo usar selectores, propiedades y flexbox para diseñar páginas web.",
    lenguages: ["CSS"],
    href: "/notes/2",
    content: `
      <h2>Introducción a CSS</h2>
      <p>CSS (Cascading Style Sheets) es el lenguaje utilizado para describir la presentación de documentos HTML.</p>
      
      <h3>Selectores básicos</h3>
      <pre><code>/* Selector de elemento */
h1 {
    color: blue;
    font-size: 24px;
}

/* Selector de clase */
.mi-clase {
    background-color: #f0f0f0;
    padding: 10px;
}

/* Selector de ID */
#mi-id {
    border: 1px solid black;
}</code></pre>

      <h3>Flexbox</h3>
      <p>Flexbox es una herramienta poderosa para crear layouts flexibles:</p>
      <pre><code>.contenedor {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}</code></pre>
    `,
  },
  {
    id: 3,
    title: "JavaScript Básico",
    desc: "Variables, funciones, condicionales y loops en JS.",
    lenguages: ["JS"],
    href: "/notes/3",
    content: `
      <h2>Fundamentos de JavaScript</h2>
      <p>JavaScript es un lenguaje de programación que permite crear páginas web interactivas.</p>
      
      <h3>Variables</h3>
      <pre><code>// Variables modernas
let nombre = "Juan";
const edad = 25;
var ciudad = "Madrid"; // Evitar usar var

// Tipos de datos
let numero = 42;
let texto = "Hola mundo";
let booleano = true;
let array = [1, 2, 3, 4];
let objeto = { nombre: "Ana", edad: 30 };</code></pre>

      <h3>Funciones</h3>
      <pre><code>// Función tradicional
function saludar(nombre) {
    return "Hola, " + nombre;
}

// Función flecha
const saludarFlecha = (nombre) => {
    return \`Hola, \${nombre}\`;
}

// Función flecha simplificada
const sumar = (a, b) => a + b;</code></pre>

      <h3>Condicionales y Loops</h3>
      <pre><code>// Condicional
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

// Loop for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Loop forEach
array.forEach(item => console.log(item));</code></pre>
    `,
  },
  {
    id: 4,
    title: "Proyecto Web",
    desc: "Crear un pequeño proyecto integrando HTML, CSS y JS.",
    lenguages: ["HTML", "CSS", "JS"],
    href: "/notes/4",
    content: `
      <h2>Proyecto: Lista de Tareas</h2>
      <p>Vamos a crear una aplicación simple de lista de tareas que integre HTML, CSS y JavaScript.</p>
      
      <h3>HTML Structure</h3>
      <pre><code>&lt;div class="todo-app"&gt;
    &lt;h1&gt;Mi Lista de Tareas&lt;/h1&gt;
    &lt;input type="text" id="taskInput" placeholder="Agregar nueva tarea..."&gt;
    &lt;button id="addBtn"&gt;Agregar&lt;/button&gt;
    &lt;ul id="taskList"&gt;&lt;/ul&gt;
&lt;/div&gt;</code></pre>

      <h3>CSS Styling</h3>
      <pre><code>.todo-app {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.task-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    opacity: 0.6;
}</code></pre>

      <h3>JavaScript Functionality</h3>
      <pre><code>const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = \`
            &lt;span&gt;\${taskText}&lt;/span&gt;
            &lt;button onclick="removeTask(this)"&gt;Eliminar&lt;/button&gt;
        \`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

addBtn.addEventListener('click', addTask);</code></pre>
    `,
  },
  {
    id: 5,
    title: "Frameworks Frontend",
    desc: "Introducción a frameworks modernos como React y Vue.",
    lenguages: ["JS"],
    href: "/notes/5",
    content: `
      <h2>¿Qué son los Frameworks Frontend?</h2>
      <p>Los frameworks frontend son herramientas que facilitan el desarrollo de aplicaciones web complejas, proporcionando estructura, componentes reutilizables y gestión de estado.</p>
      
      <h3>React</h3>
      <p>React es una biblioteca de JavaScript para construir interfaces de usuario:</p>
      <pre><code>import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);
    
    return (
        &lt;div&gt;
            &lt;p&gt;Has hecho clic {count} veces&lt;/p&gt;
            &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                Hacer clic
            &lt;/button&gt;
        &lt;/div&gt;
    );
}</code></pre>

      <h3>Vue.js</h3>
      <p>Vue es un framework progresivo para construir interfaces de usuario:</p>
      <pre><code>&lt;template&gt;
    &lt;div&gt;
        &lt;p&gt;Has hecho clic {{ count }} veces&lt;/p&gt;
        &lt;button @click="count++"&gt;Hacer clic&lt;/button&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            count: 0
        }
    }
}
&lt;/script&gt;</code></pre>

      <h3>Ventajas de usar Frameworks</h3>
      <ul>
        <li>Componentes reutilizables</li>
        <li>Gestión de estado centralizada</li>
        <li>Routing del lado del cliente</li>
        <li>Ecosistema de herramientas</li>
        <li>Comunidad activa</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "Buenas prácticas",
    desc: "Cómo mantener tu código limpio y organizado.",
    lenguages: ["HTML", "CSS", "JS"],
    href: "/notes/6",
    content: `
      <h2>Buenas Prácticas en Desarrollo Web</h2>
      <p>Seguir buenas prácticas es esencial para crear código mantenible, escalable y eficiente.</p>
      
      <h3>HTML</h3>
      <ul>
        <li>Usar HTML semántico (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;)</li>
        <li>Incluir atributos alt en imágenes</li>
        <li>Validar el HTML</li>
        <li>Usar indentación consistente</li>
      </ul>

      <h3>CSS</h3>
      <ul>
        <li>Organizar CSS con metodologías como BEM</li>
        <li>Usar variables CSS para colores y espaciado</li>
        <li>Evitar !important</li>
        <li>Optimizar para diferentes dispositivos (responsive)</li>
      </ul>

      <pre><code>/* Ejemplo BEM */
.card {}
.card__title {}
.card__content {}
.card--featured {}

/* Variables CSS */
:root {
    --primary-color: #007bff;
    --spacing-unit: 8px;
}</code></pre>

      <h3>JavaScript</h3>
      <ul>
        <li>Usar nombres descriptivos para variables y funciones</li>
        <li>Evitar variables globales</li>
        <li>Comentar código complejo</li>
        <li>Usar const y let en lugar de var</li>
        <li>Manejar errores apropiadamente</li>
      </ul>

      <pre><code>// Buena práctica
const calculateTotalPrice = (items) => {
    try {
        return items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    } catch (error) {
        console.error('Error calculating total:', error);
        return 0;
    }
};</code></pre>

      <h3>General</h3>
      <ul>
        <li>Usar control de versiones (Git)</li>
        <li>Escribir tests para tu código</li>
        <li>Documentar tu código</li>
        <li>Optimizar rendimiento</li>
        <li>Seguir principios de accesibilidad</li>
      </ul>
    `,
  },
];
