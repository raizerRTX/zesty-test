import Image from 'next/image'

async function getData() {
  const res = await fetch('https://www.zesty.io/-/gql/platform_section.json');
  return res.json()
}

export default async function Home() {
  const data = await getData();
   
  return (
    <main className="main">
      <div className="container-fluid content_parent_panel">
          <div className="col-12 w-100 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
            <div className="card">
              <div className="row row-bordered g-0">
                <h3 className="card-header m-0 me-2 page_title"><b>Contents: </b></h3>
              </div>
              <div className="container-fluid content_panel overflow-auto">
              {
                (() => {
                  let container = [];
                  data.forEach((val, index) => {
                    container.push(
                      <>
                        <div className="details">
                          <input type="checkbox" id={'collapse_' + index} />
                          <h3 className="details_title"><label htmlFor={'collapse_' + index}>{val.title}</label></h3>
                          <div className="summary overflow-auto">
                            <div className="card card-body m-1 img_content overflow-auto" dangerouslySetInnerHTML = {{__html:val.media_content}} />
                            <div className="card card-body m-1 overflow-auto" dangerouslySetInnerHTML = {{__html:val.text_content}} />
                          </div>
                        </div>
                      </>
                    )
                  });
                  return container;
                })()
              }   
              </div>
            </div>
          </div>
      </div>
    </main>
  )
}

