import { scansTypes } from '../constants';
import { scansService } from '../../services';

const addScan = data => dispatch =>
  dispatch({
    type: scansTypes.ADD_SCAN,
    payload: scansService.addScan(data)
  });

const addStartScan = id => dispatch =>
  dispatch({
    type: scansTypes.ADD_START_SCAN,
    payload: scansService.startScan(id)
  });

const getScans =
  (query = {}) =>
  dispatch =>
    dispatch({
      type: scansTypes.GET_SCANS,
      payload: scansService.getScans('', query)
    });

const getScanJobs =
  (id, query = {}) =>
  dispatch =>
    dispatch({
      type: scansTypes.GET_SCAN_JOBS,
      payload: scansService.getScanJobs(id, query),
      meta: { id, query }
    });

const getScanJob = id => dispatch =>
  dispatch({
    type: scansTypes.GET_SCAN_JOB,
    payload: scansService.getScanJob(id),
    meta: { id }
  });

const getConnectionScanResults =
  (id, query = {}) =>
  dispatch =>
    dispatch({
      type: scansTypes.GET_SCAN_CONNECTION_RESULTS,
      payload: scansService.getConnectionScanResults(id, query),
      meta: { id, query }
    });

const getInspectionScanResults =
  (id, query = {}) =>
  dispatch =>
    dispatch({
      type: scansTypes.GET_SCAN_INSPECTION_RESULTS,
      payload: scansService.getInspectionScanResults(id, query),
      meta: { id, query }
    });

const startScan = id => dispatch =>
  dispatch({
    type: scansTypes.START_SCAN,
    payload: scansService.startScan(id),
    meta: { id }
  });

const pauseScan = id => dispatch =>
  dispatch({
    type: scansTypes.PAUSE_SCAN,
    payload: scansService.pauseScan(id),
    meta: { id }
  });

const cancelScan = id => dispatch =>
  dispatch({
    type: scansTypes.CANCEL_SCAN,
    payload: scansService.cancelScan(id),
    meta: { id }
  });

const restartScan = id => dispatch =>
  dispatch({
    type: scansTypes.RESTART_SCAN,
    payload: scansService.restartScan(id),
    meta: { id }
  });

const scansActions = {
  addScan,
  addStartScan,
  getScans,
  getScanJobs,
  getScanJob,
  getConnectionScanResults,
  getInspectionScanResults,
  startScan,
  pauseScan,
  cancelScan,
  restartScan
};

export {
  scansActions as default,
  scansActions,
  addScan,
  addStartScan,
  getScans,
  getScanJobs,
  getScanJob,
  getConnectionScanResults,
  getInspectionScanResults,
  startScan,
  pauseScan,
  cancelScan,
  restartScan
};
