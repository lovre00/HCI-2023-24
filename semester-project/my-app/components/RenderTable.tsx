
import styles from './RenderTable.module.css';

const RenderTable = ({ data }: any) => {
    // Recursive function to render JSON data as a table
    const renderJSONAsTable = (jsonData: any) => {
      return (
        <table className={styles.jsontable}>
          <tbody>
            {Object.keys(jsonData).map((key) => (
              <tr key={key} className="data-row">
                <td className="font-bold text-sm text-stone-700">{key}</td>
                <td className="value text-sm text-right">
                  {typeof jsonData[key] === 'object' ? (
                    // Render nested object or array
                    <RenderTable key={key} data={jsonData[key]} />
                  ) : (
                    // Render value
                    jsonData[key]
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    };
  
    return renderJSONAsTable(data);
};

export default RenderTable;