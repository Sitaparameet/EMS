const axios = require('axios');

async function testAPI() {
  console.log('Testing EMS API...');
  
  try {
    // Test the base endpoint
    console.log('\n1. Testing base endpoint...');
    const baseResponse = await axios.get('http://127.0.0.1:5000/');
    console.log('✅ Base endpoint working:', baseResponse.data);
    
    // Test the employees endpoint
    console.log('\n2. Testing employees endpoint...');
    const employeesResponse = await axios.get('http://127.0.0.1:5000/employee/all');
    console.log('✅ Employees endpoint working:', employeesResponse.data);
    
    console.log('\n🎉 All tests passed! Your backend is working correctly.');
    
  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.log('Make sure your backend server is running on port 5000');
    }
  }
}

testAPI(); 