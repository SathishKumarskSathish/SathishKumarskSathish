import java.util.*;

class Employee {
    String id;
    String department;
    String gender;

    Employee(String id, String department, String gender) {
        this.id = id;
        this.department = department;
        this.gender = gender;
    }

    public String toString() {
        return "ID: " + id + ", Dep: " + department + ", Gender: " + gender;
    }
}

public class CollectionManager {
    private static Map<String, List<Employee>> collections = new HashMap<>();

 public static void createCollection(String collectionName) {
        collections.put(collectionName, new ArrayList<>());
        System.out.println("Created collection: " + collectionName);
    }

 
    public static int getEmpCount(String collectionName) {
        List<Employee> employees = collections.get(collectionName);
        return employees != null ? employees.size() : 0;
    }

    public static void indexData(String collectionName, String attribute, String value) {
        Employee emp = new Employee("E0" + (int) (Math.random() * 10000), "IT", "Male");  
        List<Employee> employees = collections.get(collectionName);
        if (employees != null) {
            employees.add(emp);
            System.out.println("Added " + attribute + " to collection: " + collectionName);
        } else {
            System.out.println("Collection does not exist.");
        }
    }
    public static void delEmpById(String collectionName, String empId) {
        List<Employee> employees = collections.get(collectionName);
        if (employees != null) {
            employees.removeIf(emp -> emp.id.equals(empId));
            System.out.println("Deleted emp with ID: " + empId + " from collection: " + collectionName);
        } else {
            System.out.println("Collection does not exist.");
        }
    }

    public static List<Employee> searchByColumn(String collectionName, String column, String value) {
        List<Employee> employees = collections.get(collectionName);
        List<Employee> result = new ArrayList<>();
        if (employees != null) {
            for (Employee emp : employees) {
                if (column.equals("Department") && emp.department.equals(value)) {
                    result.add(emp);
                } else if (column.equals("Gender") && emp.gender.equals(value)) {
                    result.add(emp);
                }
            }
        }
        return result;
    }


    public static Map<String, Integer> getDepFacet(String collectionName) {
        List<Employee> employees = collections.get(collectionName);
        Map<String, Integer> facet = new HashMap<>();
        if (employees != null) {
            for (Employee emp : employees) {
                facet.put(emp.department, facet.getOrDefault(emp.department, 0) + 1);
            }
        }
        return facet;
    }

    public static void main(String[] args) {
        String v_nameCollection = "Hash_Mohan";
        String v_phoneCollection = "Hash_1234";
        
        createCollection(v_nameCollection);
        createCollection(v_phoneCollection);

        System.out.println("STARTING emp count in " + v_nameCollection + ": " + getEmpCount(v_nameCollection));
        indexData(v_nameCollection, "Dep", "IT");
        indexData(v_phoneCollection, "Gender", "Male");
        System.out.println("Emp count in " + v_nameCollection + ": " + getEmpCount(v_nameCollection));
        delEmpById(v_nameCollection, "E02003");
        System.out.println("Emp count in " + v_nameCollection + ": " + getEmpCount(v_nameCollection));
        System.out.println("Emp  IT Dep: " + searchByColumn(v_nameCollection, "Department", "IT"));
        System.out.println("Male Emp: " + searchByColumn(v_nameCollection, "Gender", "Male"));
        System.out.println("Department facet  " + v_nameCollection + ": " + getDepFacet(v_nameCollection));
        System.out.println("Department facet  " + v_phoneCollection + ": " + getDepFacet(v_phoneCollection));
    }
}