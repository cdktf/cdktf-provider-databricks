// https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksNodeTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#category DataDatabricksNodeType#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#fleet DataDatabricksNodeType#fleet}
  */
  readonly fleet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#gb_per_core DataDatabricksNodeType#gb_per_core}
  */
  readonly gbPerCore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#graviton DataDatabricksNodeType#graviton}
  */
  readonly graviton?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#id DataDatabricksNodeType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#is_io_cache_enabled DataDatabricksNodeType#is_io_cache_enabled}
  */
  readonly isIoCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#local_disk DataDatabricksNodeType#local_disk}
  */
  readonly localDisk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#local_disk_min_size DataDatabricksNodeType#local_disk_min_size}
  */
  readonly localDiskMinSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#min_cores DataDatabricksNodeType#min_cores}
  */
  readonly minCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#min_gpus DataDatabricksNodeType#min_gpus}
  */
  readonly minGpus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#min_memory_gb DataDatabricksNodeType#min_memory_gb}
  */
  readonly minMemoryGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#photon_driver_capable DataDatabricksNodeType#photon_driver_capable}
  */
  readonly photonDriverCapable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#photon_worker_capable DataDatabricksNodeType#photon_worker_capable}
  */
  readonly photonWorkerCapable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#support_port_forwarding DataDatabricksNodeType#support_port_forwarding}
  */
  readonly supportPortForwarding?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type databricks_node_type}
*/
export class DataDatabricksNodeType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_node_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksNodeType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksNodeType to import
  * @param importFromId The id of the existing DataDatabricksNodeType that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksNodeType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_node_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/node_type databricks_node_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksNodeTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksNodeTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_node_type',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.67.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._fleet = config.fleet;
    this._gbPerCore = config.gbPerCore;
    this._graviton = config.graviton;
    this._id = config.id;
    this._isIoCacheEnabled = config.isIoCacheEnabled;
    this._localDisk = config.localDisk;
    this._localDiskMinSize = config.localDiskMinSize;
    this._minCores = config.minCores;
    this._minGpus = config.minGpus;
    this._minMemoryGb = config.minMemoryGb;
    this._photonDriverCapable = config.photonDriverCapable;
    this._photonWorkerCapable = config.photonWorkerCapable;
    this._supportPortForwarding = config.supportPortForwarding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // fleet - computed: false, optional: true, required: false
  private _fleet?: boolean | cdktf.IResolvable; 
  public get fleet() {
    return this.getBooleanAttribute('fleet');
  }
  public set fleet(value: boolean | cdktf.IResolvable) {
    this._fleet = value;
  }
  public resetFleet() {
    this._fleet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet;
  }

  // gb_per_core - computed: false, optional: true, required: false
  private _gbPerCore?: number; 
  public get gbPerCore() {
    return this.getNumberAttribute('gb_per_core');
  }
  public set gbPerCore(value: number) {
    this._gbPerCore = value;
  }
  public resetGbPerCore() {
    this._gbPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gbPerCoreInput() {
    return this._gbPerCore;
  }

  // graviton - computed: false, optional: true, required: false
  private _graviton?: boolean | cdktf.IResolvable; 
  public get graviton() {
    return this.getBooleanAttribute('graviton');
  }
  public set graviton(value: boolean | cdktf.IResolvable) {
    this._graviton = value;
  }
  public resetGraviton() {
    this._graviton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gravitonInput() {
    return this._graviton;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_io_cache_enabled - computed: false, optional: true, required: false
  private _isIoCacheEnabled?: boolean | cdktf.IResolvable; 
  public get isIoCacheEnabled() {
    return this.getBooleanAttribute('is_io_cache_enabled');
  }
  public set isIoCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._isIoCacheEnabled = value;
  }
  public resetIsIoCacheEnabled() {
    this._isIoCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIoCacheEnabledInput() {
    return this._isIoCacheEnabled;
  }

  // local_disk - computed: false, optional: true, required: false
  private _localDisk?: boolean | cdktf.IResolvable; 
  public get localDisk() {
    return this.getBooleanAttribute('local_disk');
  }
  public set localDisk(value: boolean | cdktf.IResolvable) {
    this._localDisk = value;
  }
  public resetLocalDisk() {
    this._localDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskInput() {
    return this._localDisk;
  }

  // local_disk_min_size - computed: false, optional: true, required: false
  private _localDiskMinSize?: number; 
  public get localDiskMinSize() {
    return this.getNumberAttribute('local_disk_min_size');
  }
  public set localDiskMinSize(value: number) {
    this._localDiskMinSize = value;
  }
  public resetLocalDiskMinSize() {
    this._localDiskMinSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDiskMinSizeInput() {
    return this._localDiskMinSize;
  }

  // min_cores - computed: false, optional: true, required: false
  private _minCores?: number; 
  public get minCores() {
    return this.getNumberAttribute('min_cores');
  }
  public set minCores(value: number) {
    this._minCores = value;
  }
  public resetMinCores() {
    this._minCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCoresInput() {
    return this._minCores;
  }

  // min_gpus - computed: false, optional: true, required: false
  private _minGpus?: number; 
  public get minGpus() {
    return this.getNumberAttribute('min_gpus');
  }
  public set minGpus(value: number) {
    this._minGpus = value;
  }
  public resetMinGpus() {
    this._minGpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minGpusInput() {
    return this._minGpus;
  }

  // min_memory_gb - computed: false, optional: true, required: false
  private _minMemoryGb?: number; 
  public get minMemoryGb() {
    return this.getNumberAttribute('min_memory_gb');
  }
  public set minMemoryGb(value: number) {
    this._minMemoryGb = value;
  }
  public resetMinMemoryGb() {
    this._minMemoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryGbInput() {
    return this._minMemoryGb;
  }

  // photon_driver_capable - computed: false, optional: true, required: false
  private _photonDriverCapable?: boolean | cdktf.IResolvable; 
  public get photonDriverCapable() {
    return this.getBooleanAttribute('photon_driver_capable');
  }
  public set photonDriverCapable(value: boolean | cdktf.IResolvable) {
    this._photonDriverCapable = value;
  }
  public resetPhotonDriverCapable() {
    this._photonDriverCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonDriverCapableInput() {
    return this._photonDriverCapable;
  }

  // photon_worker_capable - computed: false, optional: true, required: false
  private _photonWorkerCapable?: boolean | cdktf.IResolvable; 
  public get photonWorkerCapable() {
    return this.getBooleanAttribute('photon_worker_capable');
  }
  public set photonWorkerCapable(value: boolean | cdktf.IResolvable) {
    this._photonWorkerCapable = value;
  }
  public resetPhotonWorkerCapable() {
    this._photonWorkerCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonWorkerCapableInput() {
    return this._photonWorkerCapable;
  }

  // support_port_forwarding - computed: false, optional: true, required: false
  private _supportPortForwarding?: boolean | cdktf.IResolvable; 
  public get supportPortForwarding() {
    return this.getBooleanAttribute('support_port_forwarding');
  }
  public set supportPortForwarding(value: boolean | cdktf.IResolvable) {
    this._supportPortForwarding = value;
  }
  public resetSupportPortForwarding() {
    this._supportPortForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportPortForwardingInput() {
    return this._supportPortForwarding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      fleet: cdktf.booleanToTerraform(this._fleet),
      gb_per_core: cdktf.numberToTerraform(this._gbPerCore),
      graviton: cdktf.booleanToTerraform(this._graviton),
      id: cdktf.stringToTerraform(this._id),
      is_io_cache_enabled: cdktf.booleanToTerraform(this._isIoCacheEnabled),
      local_disk: cdktf.booleanToTerraform(this._localDisk),
      local_disk_min_size: cdktf.numberToTerraform(this._localDiskMinSize),
      min_cores: cdktf.numberToTerraform(this._minCores),
      min_gpus: cdktf.numberToTerraform(this._minGpus),
      min_memory_gb: cdktf.numberToTerraform(this._minMemoryGb),
      photon_driver_capable: cdktf.booleanToTerraform(this._photonDriverCapable),
      photon_worker_capable: cdktf.booleanToTerraform(this._photonWorkerCapable),
      support_port_forwarding: cdktf.booleanToTerraform(this._supportPortForwarding),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet: {
        value: cdktf.booleanToHclTerraform(this._fleet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gb_per_core: {
        value: cdktf.numberToHclTerraform(this._gbPerCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graviton: {
        value: cdktf.booleanToHclTerraform(this._graviton),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_io_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._isIoCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_disk: {
        value: cdktf.booleanToHclTerraform(this._localDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_disk_min_size: {
        value: cdktf.numberToHclTerraform(this._localDiskMinSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_cores: {
        value: cdktf.numberToHclTerraform(this._minCores),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_gpus: {
        value: cdktf.numberToHclTerraform(this._minGpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_memory_gb: {
        value: cdktf.numberToHclTerraform(this._minMemoryGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      photon_driver_capable: {
        value: cdktf.booleanToHclTerraform(this._photonDriverCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      photon_worker_capable: {
        value: cdktf.booleanToHclTerraform(this._photonWorkerCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      support_port_forwarding: {
        value: cdktf.booleanToHclTerraform(this._supportPortForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
