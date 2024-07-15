import { useForm } from 'react-hook-form'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'
import './style/AddProduct.scss'
import { useProduct } from '@/store/store'

function AddProduct() {
  const [advantagesEn, setAdvantagesEn] = useState<any>('')
  const [advantagesRu, setAdvantagesRu] = useState<any>('')
  const [compositionEn, setCompositionEn] = useState<any>('')
  const [compositionRn, setCompositionRu] = useState<any>('')
  const [rateEn, setRateEn] = useState<any>('')
  const [rateRu, setRateRu] = useState<any>('')
  const addProduct = useProduct(state => state.addProduct)

  const {
    register,
    handleSubmit,
    reset, formState: { errors }
  } = useForm({
    mode: 'onBlur'
  })
  const advantagesEnChange = (e: any, editor: any) => {
    const data = editor.getData()
    setAdvantagesEn(data)
  }
  const advantagesRuChange = (e: any, editor: any) => {
    const data = editor.getData()
    setAdvantagesRu(data)
  }
  const compositionEnChange = (e: any, editor: any) => {
    const data = editor.getData()
    setCompositionEn(data)
  }
  const compositionRuChange = (e: any, editor: any) => {
    const data = editor.getData()
    setCompositionRu(data)
  }
  const rateEnChange = (e: any, editor: any) => {
    const data = editor.getData()
    setRateEn(data)
  }
  const rateRuChange = (e: any, editor: any) => {
    const data = editor.getData()
    setRateRu(data)
  }
  const onSubmit = handleSubmit(async (data: any) => {
    data.advantages_en = advantagesEn
    data.advantages_ru = advantagesRu
    data.composition_en = compositionEn
    data.composition_ru = compositionRn
    data.rate_en = rateEn
    data.rate_ru = rateRu
    try {
      const formData = new FormData()
      formData.append('name', data.name)
      formData.append('category', data.category)
      formData.append('description_en', data.description_en)
      formData.append('description_ru', data.description_ru)
      formData.append('advantages_en', data.advantages_en)
      formData.append('advantages_ru', data.advantages_ru)
      formData.append('composition_en', data.composition_en)
      formData.append('composition_ru', data.composition_ru)
      formData.append('rate_en', data.rate_en)
      formData.append('rate_ru', data.rate_ru)
      formData.append('img', data.productImage[0])
      addProduct(formData)
      console.log('данные отправлены')
    } catch (error) {
      console.log(error)
    }
    console.log(data)
  })
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-grid">
          <label >
            <h4>Название продукта</h4>
            <input
              type="text"
              placeholder='Название продукта'
              {...register('name', { required: true })}
            />
          </label>
          <label>
            <h4>Выберите категорию</h4>
            <select
              {...register('category')}
            >
              <option value="1">NPK</option>
              <option value="2">NPK(S)</option>
              <option value="3">NPK+Микроэлементы</option>
              <option value="4">NPK Водорастворимые</option>
            </select>
          </label>
          <label>
            <h4>Описание на английском</h4>
            <textarea
              placeholder='Описание продукта на английском'
              {...register('description_en')}
            />
          </label>
          <label>
            <h4>Описание на русском</h4>
            <textarea
              placeholder='Описание продукта на русском'
              {...register('description_ru')}
            />
          </label>
          <div className="label">
            <h4>Преимущество на английском</h4>
            <CKEditor
              editor={ClassicEditor}
              // data={editorData}
              onChange={advantagesEnChange}
            />
          </div>
          <div className="label">
            <h4>Преимущество на русском</h4>
            <CKEditor
              editor={ClassicEditor}
              // data={editorData}
              onChange={advantagesRuChange}
            />
          </div>
          <div className="label">
            <h4>Состав на английском</h4>
            <CKEditor
              editor={ClassicEditor}
              // data={editorData}
              onChange={compositionEnChange}
            />
          </div>
          <div className="label">
            <h4>Состав на русском</h4>
            <CKEditor
              editor={ClassicEditor}
              // data={editorData}
              onChange={compositionRuChange}
            />
          </div>
          <div className="label">
            <h4>Рассход на английском</h4>
            <CKEditor
              editor={ClassicEditor}
              // data={editorData}
              onChange={rateEnChange}
            />
          </div>
          <div className="label">
            <h4>Рассход на русском</h4>
            <CKEditor
              editor={ClassicEditor}
              // data={editorData}
              onChange={rateRuChange}
            />
          </div>
          <label>
            <input
              type="file"
              {...register('productImage')}
            />
          </label>
        </div>
        <button>Сохранить</button>
      </form>
      {/* <div dangerouslySetInnerHTML={{ __html: advantagesEn }}></div> */}
    </>
  );
}

export default AddProduct;