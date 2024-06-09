import React, { useState } from 'react'
import { Modal, Form, Input, Select, message } from 'antd'
import Layout from '../components/layouts/Layout'
import axios from '../Services/instance'
import Spinner from '../components/Spinner'

const HomePage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (values) => {
      try {
        const user = JSON.parse(localStorage.getItem('user'))
        setLoading(true);
        await axios.post('/transactions/add-transaction', {...values, userid:user._id});
        message.sucess('Transaction Added Success Fully.');
      } catch (error) {
        message.error("Failed to add transaction")
      } finally {
        setLoading(false);
      }
  }
  return (
    <Layout>
      {loading && <Spinner />}
      <div className="filters">
        <div>
          range filters
        </div>

        <div className='btn btn-primary' onClick={showModal}>
          Add New
        </div>
      </div>

      <div className="content">

      </div>

      <Modal title="Add Transaction"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}>

        <Form layout='vertical' onFinish={handleSubmit}>
          <Form.Item label='Amount' name='amount'>
            <Input type='text' />
          </Form.Item>

          <Form.Item label='Type' name='type'>
            <Select>
              <Select.Option value='income'>
                Income
              </Select.Option>

              <Select.Option value='expense'>
                Expense
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Category' name='category'>
            <Select>
              <Select.Option value='salary'>
                Salary
              </Select.Option>

              <Select.Option value='tip'>
                Tip
              </Select.Option>

              <Select.Option value='side-hustle'>
                Side hustle
              </Select.Option>

              <Select.Option value='food'>
                Food
              </Select.Option>

              <Select.Option value='movie'>
                Movie
              </Select.Option>

              <Select.Option value='bills'>
                Bills
              </Select.Option>

              <Select.Option value='tax'>
                Tax
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Date' name='date'>
            <Input type='date' />
          </Form.Item>
          
          <Form.Item label='Refrence' name='reference'>
            <Input type='text' />
          </Form.Item>

          <Form.Item label='Description' name='description'>
            <Input type='text' />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="sumbit" className='btn btn-primary'>
                Save
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  )
}

export default HomePage