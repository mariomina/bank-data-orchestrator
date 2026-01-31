# Hola equipo de Enext 👋
### Entrega de Prueba Técnica: Orquestador Bancario

Este repositorio contiene la **implementación completa de los requerimientos solicitados** para la prueba técnica Fullstack. El desarrollo se centró en cumplir puntualmente con cada característica funcional y técnica descrita en el desafío.

---

## ✅ Cumplimiento de Requerimientos

A continuación, detallo cómo se abordó cada punto solicitado:

1.  **Consumo de API Externa**: Se integró la fuente de datos solicitada (`jsonplaceholder`) a través de un servicio Node.js intermedio para asegurar la integridad de la respuesta.
2.  **Seguridad (Login)**: Se implementó el sistema de autenticación requerido mediante **JWT**, protegiendo las rutas de datos y restringiendo el acceso no autorizado.
3.  **Visualización de Datos**: El Frontend en **Angular 21** renderiza la información procesada en una interfaz clara y funcional.
4.  **Contenerización**: Se entrega la infraestructura completa en **Docker**, garantizando que la aplicación corra en cualquier entorno sin configuraciones adicionales.

## 🛠️ Stack Tecnológico Utilizado

*   **Frontend**: Angular 21 (Standalone Components).
*   **Backend**: Node.js + Express.
*   **Infraestructura**: Docker & Docker Compose.

---

## 🚀 Instrucciones de Ejecución

Para verificar la aplicación, ejecute el siguiente comando en la raíz del proyecto:

1.  **Levantar el entorno**:
    ```bash
    docker-compose up --build
    ```
2.  **Acceder al sistema**: Abra [http://localhost:8080](http://localhost:8080)
3.  **Iniciar Sesión**:
    *   Usuario: `admin`
    *   Contraseña: `admin123`

---

## ☁️ Despliegue en la Nube (Render / Railway)

Este proyecto ha sido optimizado para un **Despliegue Monolítico en Docker**, lo que facilita su publicación inmediata en plataformas como Render:

1.  Conecte este repositorio a **Render.com**.
2.  Seleccione **"New Web Service"**.
3.  El servicio detectará automáticamente el archivo `Dockerfile` en la raíz.
4.  ¡Listo! El Frontend y Backend se desplegarán en un solo servicio (puerto 3000 interno).

---

Quedo a su disposición para cualquier duda sobre el código entregado.

Atentamente,
**Mario** 
*Candidato Fullstack Developer*
