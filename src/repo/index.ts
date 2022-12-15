// https://www.terraform.io/docs/providers/databricks/r/repo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#branch Repo#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#commit_hash Repo#commit_hash}
  */
  readonly commitHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#git_provider Repo#git_provider}
  */
  readonly gitProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#id Repo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#path Repo#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#tag Repo#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/repo#url Repo#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/repo databricks_repo}
*/
export class Repo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_repo";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/repo databricks_repo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepoConfig
  */
  public constructor(scope: Construct, id: string, config: RepoConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_repo',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.7.0',
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
    this._branch = config.branch;
    this._commitHash = config.commitHash;
    this._gitProvider = config.gitProvider;
    this._id = config.id;
    this._path = config.path;
    this._tag = config.tag;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch - computed: true, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // commit_hash - computed: true, optional: true, required: false
  private _commitHash?: string; 
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
  }
  public set commitHash(value: string) {
    this._commitHash = value;
  }
  public resetCommitHash() {
    this._commitHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitHashInput() {
    return this._commitHash;
  }

  // git_provider - computed: true, optional: true, required: false
  private _gitProvider?: string; 
  public get gitProvider() {
    return this.getStringAttribute('git_provider');
  }
  public set gitProvider(value: string) {
    this._gitProvider = value;
  }
  public resetGitProvider() {
    this._gitProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderInput() {
    return this._gitProvider;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch: cdktf.stringToTerraform(this._branch),
      commit_hash: cdktf.stringToTerraform(this._commitHash),
      git_provider: cdktf.stringToTerraform(this._gitProvider),
      id: cdktf.stringToTerraform(this._id),
      path: cdktf.stringToTerraform(this._path),
      tag: cdktf.stringToTerraform(this._tag),
      url: cdktf.stringToTerraform(this._url),
    };
  }
}
