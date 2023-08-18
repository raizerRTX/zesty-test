
async function getData() {
  const res = await fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json');
  return res.json()
}

export default async function Home() {
  const data = await getData();
  
  return (
    <main className="main">
      <div className="container-fluid content_parent_panel">
          <div className="col-12 w-100 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div className="card">
              <div className="container-fluid d-flex align-items-center justify-content-center">  
                  <h3 className="m-5 page_title"><b>{data['meta']['web'].seo_meta_title}</b></h3>              
              </div>
              <div className="container-fluid content_panel overflow-auto">
                <div className="container-fluid d-flex align-items-center justify-content-center">
                  <div className="card card-body" dangerouslySetInnerHTML = {{__html: data['meta']['web'].seo_meta_description}} />
                </div>
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}

