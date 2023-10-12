#include <Python.h>

void print_python_list(PyObject *p) {
	Py_ssize_t i, size;
	PyObject *item;

	if (PyList_Check(p)) {
		size = PyList_Size(p);
		printf("[*] Python list info\n");
		printf("[*] Size of the Python List = %ld\n", size);
		printf("[*] Allocated = %ld\n", ((PyListObject *)p)->allocated);
		for (i = 0; i < size; i++) {
			item = PyList_GetItem(p, i);
			printf("Element %ld: %s\n", i, Py_TYPE(item)->tp_name);
		}
	} else {
		printf(" [ERROR] Invalid List Object\n");
	}
}

void print_python_bytes(PyObject *p) {
	Py_ssize_t size, i;
	char *str;

	if (PyBytes_Check(p)) {
		size = ((PyVarObject *)p)->ob_size;
		str = ((PyBytesObject *)p)->ob_sval;
		printf("[.] bytes object info\n");
		printf(" size: %ld\n", size);
		printf(" trying string: %s\n", str);
		printf(" first %ld bytes: ", (size > 10) ? 10 : size);
		for (i = 0; i < size && i < 10; i++) {
			printf("%02hhx%s", str[i], (i + 1 < size && i < 9) ? " " : "");
		}
		printf("\n");
	} else {
		printf(" [ERROR] Invalid Bytes Object\n");
	}
}
