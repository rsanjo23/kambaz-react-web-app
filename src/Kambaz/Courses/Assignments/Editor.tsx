export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label>Online Entry Options</label><br />
              <input type="checkbox" name="check-entry-options" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>
              
              <input type="checkbox" name="check-entry-options" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" name="check-entry-options" id="wd-file-uploads"/>
              <label htmlFor="wd-file-uploads">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign To</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <input id="wd-assign-to" defaultValue={"Everyone"} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <input type="date"
                defaultValue="2024-05-13"
                id="wd-due-date"/>
            </td>
          </tr>

          <br />
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <label htmlFor="wd-available-from">Available From</label>
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
            </td>
            <td>
              <input type="date"
                defaultValue="2024-05-06"
                id="wd-available-from"/>
            </td>
            <td align="right" valign="top">
              <input type="date"
                defaultValue="2024-05-20"
                id="wd-available-until"/>
            </td>
          </tr>
        </table>
        
        <hr />
        <button>Cancel</button> <button>Save</button>
      </div>
    );
}
  