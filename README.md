
# Challenge Hiberus

Este proyecto es un microservicio Node.js que se conecta a una base de datos MySQL. El proyecto incluye configuraciones para CI/CD, pruebas, linting y commit linting. A continuación se describen los pasos para configurar y ejecutar el proyecto localmente.

## Requisitos

- Node.js
- Docker
- Docker Compose

## Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/amurillog26/challenge-hiberus.git
    cd challenge-hiberus
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

## Configuración de Docker Compose

Para levantar el entorno de desarrollo local utilizando Docker Compose, asegúrate de tener Docker y Docker Compose instalados.

1. Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

    ```env
    MYSQLDB_HOST=mysqldb
    MYSQLDB_USER=myuser
    MYSQLDB_PASSWORD=mypassword
    MYSQLDB_DATABASE=mydatabase
    NODE_ENV=development
    ```

2. Levantar los servicios con Docker Compose:

    ```bash
    docker-compose up --build
    ```

Esto levantará un contenedor para la base de datos MySQL y otro para la aplicación Node.js.

## Linting

El proyecto utiliza ESLint para mantener la calidad del código. La configuración de ESLint se encuentra en `.eslintrc.js`.

Para ejecutar el linter:

```bash
npm run lint
```

## Pruebas

El proyecto utiliza Jest para las pruebas unitarias. La configuración de Jest se encuentra en `jest.config.js`.

Para ejecutar las pruebas:

```bash
npm test
```

## Commit Linting

Para asegurar que los mensajes de commit sigan un estándar específico, se utiliza Commitlint junto con Husky y Lint-staged.

### Husky

Husky se encarga de ejecutar los hooks de Git. Los hooks configurados son:

- `pre-commit`: Ejecuta `lint-staged` para verificar y corregir el código antes de hacer commit.
- `commit-msg`: Ejecuta Commitlint para asegurar que los mensajes de commit sigan el estándar.

### Lint-staged

Lint-staged se configura para ejecutar ESLint en los archivos modificados antes de hacer commit. La configuración se encuentra en el archivo `package.json`.

### Commitlint

Commitlint asegura que los mensajes de commit sigan el estándar convencional. La configuración se encuentra en `commitlint.config.js`.

## Scripts de NPM

- `start`: Inicia la aplicación.
- `test`: Ejecuta las pruebas con Jest.
- `lint`: Ejecuta ESLint para verificar el código.
- `prepare`: Configura Husky.

## Estructura del Proyecto

```
project-root/
├── .husky/
│   ├── commit-msg
│   ├── pre-commit
│   └── _/husky.sh
├── node_modules/
├── src/
│   ├── app.js
│   └── database.js
├── tests/
│   ├── app.test.js
│   └── db.mock.js
├── .eslintignore
├── .eslintrc.js
├── commitlint.config.js
├── docker-compose.yml
├── package.json
└── eslint.config.js
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las guías de estilo y las convenciones de commit antes de hacer un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
