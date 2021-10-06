import styled from 'styled-components';

export const Layout = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  background: #F5F8FF;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 24px 48px;
  box-shadow: rgba(50, 50, 93, 0.25), 0px 50px 100px -20px, rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  text-align: center;

  > p {
    margin-top: -10px;
    color: #777;
  }
`

export const BoxUpload = styled.div`
  display: grid;
  margin-top: 20px;
  place-items: center;
  border: 1px dashed #799CD9;
  //padding: 36px 48px;
  position: relative;
  
  height: 350px;
  width: 350px;
  border-radius: 20px;
  background: #fbfbff;

  .image-upload {
    display: flex;
    flex-wrap: wrap;

    label {
      cursor: pointer;

      :hover {
        opacity: .8;
      }
    }

    > input {
      display: none;
    }
  }
`
export const ImagePreview = styled.div`
  position: relative;

  #uploaded-image {
    width: 345px;
    height: 304px;
    object-fit: cover;
    border-radius: 20px;
  }

  .close-icon {
    background: #fff;
    border-radius: 5px;
    opacity: .8;

    position: absolute;
    z-index: 10;
    right: 0;
    top: 20px;
    cursor: pointer;

    :hover {
      opacity: 1;
    }
  }
`
