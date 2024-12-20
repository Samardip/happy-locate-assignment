import React from "react";
import { ShowHeader } from "./showHeader";
import { useAddInventoryPage } from "../../useHooks/useAddInventoryPageHooks/useAddInventoryPage";
import ProductDetailPage from "../productDetailPage/productDetailPage";

const AddInventoryPage = React.memo(() => {
  const {
    selectedTab,
    inventoryTabData,
    toggleStates,
    handleToggle,
    inventoryDetailsData,
  } = useAddInventoryPage();
  return (
    <>
      {
        selectedTab === 'room' ? <div className="flex flex-col justify-center items-center w-[100%] font-medium overflow-hidden">
          {
            inventoryTabData?.map((itemData,index) => {
              return itemData?.nodes?.map((itemNodes,idx) => {
                return <div className="w-[100%]"
                  key={itemNodes.id}
                >
                  <ShowHeader
                    isToggled={toggleStates[itemNodes.id] || false}
                    handleToggle={() => {handleToggle(itemNodes.id)}}
                    listItem={itemNodes}
                  />
                  <div
                    className={`transition-all duration-200 ease-in-out overflow-hidden w-[100%] flex justify-center bg-custom-grey-1 mb-[6px] ${(toggleStates[itemNodes.id] || false) ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <ProductDetailPage
                      inventoryDetailsData={inventoryDetailsData}
                      inventoryTabData={inventoryTabData}
                      itemData={inventoryTabData[index]}
                      itemNodes={inventoryTabData[index]?.nodes[idx]}
                      selectedTab={selectedTab}
                    />
                  </div>
                </div>
              })
            })
          }
        </div>
          :
          <ProductDetailPage
            inventoryDetailsData={inventoryDetailsData}
            inventoryTabData={inventoryTabData}
            itemData={{}}
            itemNodes={{}}
            selectedTab={selectedTab}
          />
      }

    </>
  );
});

export default AddInventoryPage;
