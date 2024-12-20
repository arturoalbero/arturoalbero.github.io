A c

| **Tipus**               | **Operador** | **Java**  | **C#**   | **C++**  | **C**    | **Python** |
|-------------------------|--------------|-----------|----------|----------|----------|------------|
| **Aritmètic**            | `+` (suma)   | Igual     | Igual    | Igual    | Igual    | Igual      |
|                         | `-` (resta)  | Igual     | Igual    | Igual    | Igual    | Igual      |
|                         | `*` (multiplicació) | Igual | Igual  | Igual    | Igual    | Igual      |
|                         | `/` (divisió) | Igual     | Igual    | Igual    | Igual    | Igual      |
|                         | `%` (mòdul)  | Igual     | Igual    | Igual    | Igual    | Igual      |
|                         | `++` (increment) | Igual  | Igual    | Igual    | Igual    | no existeix|
|                         | `--` (decrement) | Igual  | Igual    | Igual    | Igual    | no existeix|
|                         | `//` (divisió sencera) | no existeix | no existeix | no existeix | no existeix | Igual      |
|                         | `**` (potència) | no existeix | no existeix | no existeix | no existeix | Igual      |
|                         | `+=` (assignació suma) | Igual | Igual | Igual  | Igual    | Igual      |
|                         | `-=` (assignació resta) | Igual | Igual | Igual | Igual   | Igual      |
|                         | `*=` (assignació multiplicació) | Igual | Igual | Igual | Igual | Igual |
|                         | `/=` (assignació divisió) | Igual | Igual | Igual | Igual | Igual      |
|                         | `%=` (assignació mòdul) | Igual | Igual | Igual | Igual | Igual      |
| **Lògic**                | `&&` (AND lògic) | Igual  | Igual    | Igual    | Igual    | `and`|
|                         | `\|\|` (OR lògic)  | Igual   | Igual    | Igual    | Igual    | `or`|
|                         | `!` (NOT lògic)  | Igual   | Igual    | Igual    | Igual    | Igual o `not`     |
|                         | `==` (igualtat) | Igual   | Igual    | Igual    | Igual    | Igual      |
|                         | `!=` (distint)  | Igual   | Igual    | Igual    | Igual    | Igual      |

Aquí tienes la tabla actualizada que incluye ejemplos de asignación para cada tipo de dato en los lenguajes C, C++, Java, C#, y Python:

| **Tipo de Dato**     | **C**                            | **C++**                         | **Java**                          | **C#**                          | **Python**                  |
|----------------------|----------------------------------|---------------------------------|-----------------------------------|---------------------------------|-----------------------------|
| **Enteros**          | `int x = 10;`                   | `int x = 10;`                  | `int x = 10;`                     | `int x = 10;`                   | `x = 10`                    |
| **Float**            | `float y = 5.5f;`               | `float y = 5.5f;`              | `float y = 5.5f;`                 | `float y = 5.5f;`               | `y = 5.5`                   |
| **Double**           | `double z = 3.14159;`           | `double z = 3.14159;`          | `double z = 3.14159;`             | `double z = 3.14159;`           | `z = 3.14159`               |
| **Caracteres**       | `char c = 'A';`                 | `char c = 'A';`                | `char c = 'A';`                   | `char c = 'A';`                 | `c = 'A'`                   |
| **Cadenas de texto** | `char str[] = "Hola";`          | `std::string str = "Hola";`    | `String str = "Hola";`            | `string str = "Hola";`          | `str = "Hola"`              |
| **Booleanos**        | `_Bool b = 1;`                  | `bool b = true;`               | `boolean b = true;`              | `bool b = true;`                | `b = True`                  |

### Explicación adicional:
- **Enteros**:
  - Se utilizan valores enteros en todos los lenguajes con el mismo formato, pero en C es importante el sufijo `f` para los números en punto flotante.

- **Float y Double**:
  - En **C y C++**, el sufijo `f` se utiliza para indicar que el número es un `float`. Para `double`, no es necesario un sufijo.

- **Caracteres**:
  - Los caracteres se definen entre comillas simples en todos los lenguajes, y en Python, los caracteres individuales son tratados como cadenas de texto de un solo carácter.

- **Cadenas de texto**:
  - En C, se utilizan arreglos de caracteres o punteros. En los otros lenguajes, las cadenas son tipos de datos más complejos que permiten manipulación directa de texto.

- **Booleanos**:
  - En C, el tipo booleano fue introducido en C99 con `_Bool`, aunque se puede usar `int` en versiones anteriores. En todos los demás lenguajes, se utilizan tipos dedicados para booleanos. En Python, `True` y `False` son las instancias booleanas.