import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dateText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonText: {
    marginTop: 5,
    color: '#0066cc',
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  courseItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
  },
  courseDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  eventItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  eventDetails: {
    marginLeft: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  eventTime: {
    fontSize: 14,
    color: '#666',
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  studentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  studentName: {
    fontSize: 16,
    color: '#333',
  },
  gradeInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    width: 60,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    margin: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scheduleContainer: {
    padding: 10,
  },
  daySchedule: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 10,
  },
  courseSchedule: {
    marginBottom: 5,
  },
  scheduleTime: {
    fontSize: 14,
    color: '#666',
  },
  scheduleCourse: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;