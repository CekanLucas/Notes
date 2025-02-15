"""This is the "nestor.py" module  and it provides one function called print_lol()
which prints lists that may or may not include nested files"""


def print_lol(
    the_list, indent=False, indentation=0
):  # ? setting default argument makes indentation a optional argument
    """This function takes one positional argument called "The_list",
    and another one called "indentation" for number of tabs for nested lists
    which is any Python list (of 'possible' nested lists).
    Each data item in the provided list is (recursively) printed to the screen on it's own line
    indentation specifies how much indentation nested lists do
    """

    for each_item in the_list:

        if isinstance(each_item, list):
            print_lol(each_item, indent, indentation + 1)

        else:
            if indent:
                for _ in range(indentation):
                    print(" ", end="")
            print(each_item)
