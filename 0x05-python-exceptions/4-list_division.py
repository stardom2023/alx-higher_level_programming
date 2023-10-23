#!/usr/bin/python3
def list_division(my_list_1, my_list_2, list_length):
    result = []

    for i in range(list_length):
        try:
            elem1 = my_list_1[i] if i < len(my_list_1) else 0
            elem2 = my_list_2[i] if i < len(my_list_2) else 0

            if not isinstance(elem1, (int, float)) or not isinstance(elem2, (int, float)):
                raise TypeError("wrong type")
            elif elem2 == 0:
                raise ZeroDivisionError("division by 0")
            else:
                result.append(elem1 / elem2)
        except (IndexError, TypeError, ZeroDivisionError) as e:
            print(e)
            result.append(0)

        return result
