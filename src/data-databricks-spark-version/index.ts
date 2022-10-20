// https://www.terraform.io/docs/providers/databricks/d/spark_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSparkVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#beta DataDatabricksSparkVersion#beta}
  */
  readonly beta?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#genomics DataDatabricksSparkVersion#genomics}
  */
  readonly genomics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#gpu DataDatabricksSparkVersion#gpu}
  */
  readonly gpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#graviton DataDatabricksSparkVersion#graviton}
  */
  readonly graviton?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#id DataDatabricksSparkVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#latest DataDatabricksSparkVersion#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}
  */
  readonly longTermSupport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#ml DataDatabricksSparkVersion#ml}
  */
  readonly ml?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#photon DataDatabricksSparkVersion#photon}
  */
  readonly photon?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#scala DataDatabricksSparkVersion#scala}
  */
  readonly scala?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/spark_version#spark_version DataDatabricksSparkVersion#spark_version}
  */
  readonly sparkVersion?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/d/spark_version databricks_spark_version}
*/
export class DataDatabricksSparkVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_spark_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/d/spark_version databricks_spark_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSparkVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSparkVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_spark_version',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.5.0',
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
    this._beta = config.beta;
    this._genomics = config.genomics;
    this._gpu = config.gpu;
    this._graviton = config.graviton;
    this._id = config.id;
    this._latest = config.latest;
    this._longTermSupport = config.longTermSupport;
    this._ml = config.ml;
    this._photon = config.photon;
    this._scala = config.scala;
    this._sparkVersion = config.sparkVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beta - computed: false, optional: true, required: false
  private _beta?: boolean | cdktf.IResolvable; 
  public get beta() {
    return this.getBooleanAttribute('beta');
  }
  public set beta(value: boolean | cdktf.IResolvable) {
    this._beta = value;
  }
  public resetBeta() {
    this._beta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaInput() {
    return this._beta;
  }

  // genomics - computed: false, optional: true, required: false
  private _genomics?: boolean | cdktf.IResolvable; 
  public get genomics() {
    return this.getBooleanAttribute('genomics');
  }
  public set genomics(value: boolean | cdktf.IResolvable) {
    this._genomics = value;
  }
  public resetGenomics() {
    this._genomics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genomicsInput() {
    return this._genomics;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu?: boolean | cdktf.IResolvable; 
  public get gpu() {
    return this.getBooleanAttribute('gpu');
  }
  public set gpu(value: boolean | cdktf.IResolvable) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
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

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // long_term_support - computed: false, optional: true, required: false
  private _longTermSupport?: boolean | cdktf.IResolvable; 
  public get longTermSupport() {
    return this.getBooleanAttribute('long_term_support');
  }
  public set longTermSupport(value: boolean | cdktf.IResolvable) {
    this._longTermSupport = value;
  }
  public resetLongTermSupport() {
    this._longTermSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermSupportInput() {
    return this._longTermSupport;
  }

  // ml - computed: false, optional: true, required: false
  private _ml?: boolean | cdktf.IResolvable; 
  public get ml() {
    return this.getBooleanAttribute('ml');
  }
  public set ml(value: boolean | cdktf.IResolvable) {
    this._ml = value;
  }
  public resetMl() {
    this._ml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlInput() {
    return this._ml;
  }

  // photon - computed: false, optional: true, required: false
  private _photon?: boolean | cdktf.IResolvable; 
  public get photon() {
    return this.getBooleanAttribute('photon');
  }
  public set photon(value: boolean | cdktf.IResolvable) {
    this._photon = value;
  }
  public resetPhoton() {
    this._photon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonInput() {
    return this._photon;
  }

  // scala - computed: false, optional: true, required: false
  private _scala?: string; 
  public get scala() {
    return this.getStringAttribute('scala');
  }
  public set scala(value: string) {
    this._scala = value;
  }
  public resetScala() {
    this._scala = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalaInput() {
    return this._scala;
  }

  // spark_version - computed: false, optional: true, required: false
  private _sparkVersion?: string; 
  public get sparkVersion() {
    return this.getStringAttribute('spark_version');
  }
  public set sparkVersion(value: string) {
    this._sparkVersion = value;
  }
  public resetSparkVersion() {
    this._sparkVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkVersionInput() {
    return this._sparkVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      beta: cdktf.booleanToTerraform(this._beta),
      genomics: cdktf.booleanToTerraform(this._genomics),
      gpu: cdktf.booleanToTerraform(this._gpu),
      graviton: cdktf.booleanToTerraform(this._graviton),
      id: cdktf.stringToTerraform(this._id),
      latest: cdktf.booleanToTerraform(this._latest),
      long_term_support: cdktf.booleanToTerraform(this._longTermSupport),
      ml: cdktf.booleanToTerraform(this._ml),
      photon: cdktf.booleanToTerraform(this._photon),
      scala: cdktf.stringToTerraform(this._scala),
      spark_version: cdktf.stringToTerraform(this._sparkVersion),
    };
  }
}