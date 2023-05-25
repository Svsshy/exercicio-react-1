import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <div className="inputs">
          <h1>Preencha o documento</h1>
          <div className="inputContainer">
            <div className="inputWrapper">
              <label>Título do documento</label>
              <input placeholder="Título" type="text" />
            </div>
            <div className="inputWrapper">
              <label>Texto do documento</label>
              <textarea rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus nec magna nec malesuada. Etiam lorem urna, auctor quis dictum et, semper nec nisl. Sed gravida dui eget tortor malesuada sollicitudin. Integer eu massa placerat dolor ullamcorper consequat. Cras diam sapien, gravida vel velit non, condimentum condimentum arcu. Mauris ut placerat turpis. Vestibulum vel lacinia erat. Cras a sem velit. Vestibulum sed odio diam. In hac habitasse platea dictumst. Suspendisse eu velit euismod, laoreet ante sodales, vulputate lacus. Quisque tincidunt varius massa at imperdiet. In efficitur, nisl vitae consequat dapibus, sapien sem tincidunt arcu, ac dapibus turpis ipsum eget ante. In mollis massa sem, at viverra turpis convallis nec.
Sed eu aliquam leo. Curabitur eget neque mi. Donec porta aliquam mauris, in ultricies erat tincidunt vel. Maecenas quis aliquet quam. Curabitur ac ultricies urna, aliquam iaculis nulla. Ut sagittis odio dui, vel volutpat libero pulvinar convallis. Integer auctor fringilla diam, a convallis orci placerat et. Vivamus tincidunt convallis urna, eu dapibus magna dignissim rhoncus. Nullam semper euismod tellus, quis ullamcorper libero congue eget. Maecenas id dolor ut nibh vehicula iaculis a ut quam. Maecenas convallis ornare iaculis. Integer at velit velit. Vestibulum sit amet tempor quam. Nulla facilisi. Maecenas at erat at risus volutpat aliquet ut in eros.</div>
" type="textarea" />
            </div>
          </div>
        </div>
        <div className="preview">
          <h1>Preview</h1>
          <div className="previewContainer">
            <h1>Título</h1>
            <div className="previewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus nec magna nec malesuada. Etiam lorem urna, auctor quis dictum et, semper nec nisl. Sed gravida dui eget tortor malesuada sollicitudin. Integer eu massa placerat dolor ullamcorper consequat. Cras diam sapien, gravida vel velit non, condimentum condimentum arcu. Mauris ut placerat turpis. Vestibulum vel lacinia erat. Cras a sem velit. Vestibulum sed odio diam. In hac habitasse platea dictumst. Suspendisse eu velit euismod, laoreet ante sodales, vulputate lacus. Quisque tincidunt varius massa at imperdiet. In efficitur, nisl vitae consequat dapibus, sapien sem tincidunt arcu, ac dapibus turpis ipsum eget ante. In mollis massa sem, at viverra turpis convallis nec.
Sed eu aliquam leo. Curabitur eget neque mi. Donec porta aliquam mauris, in ultricies erat tincidunt vel. Maecenas quis aliquet quam. Curabitur ac ultricies urna, aliquam iaculis nulla. Ut sagittis odio dui, vel volutpat libero pulvinar convallis. Integer auctor fringilla diam, a convallis orci placerat et. Vivamus tincidunt convallis urna, eu dapibus magna dignissim rhoncus. Nullam semper euismod tellus, quis ullamcorper libero congue eget. Maecenas id dolor ut nibh vehicula iaculis a ut quam. Maecenas convallis ornare iaculis. Integer at velit velit. Vestibulum sit amet tempor quam. Nulla facilisi. Maecenas at erat at risus volutpat aliquet ut in eros.</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
