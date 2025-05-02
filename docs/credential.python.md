# `credential` Submodule <a name="`credential` Submodule" id="@cdktf/provider-databricks.credential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Credential <a name="Credential" id="@cdktf/provider-databricks.credential.Credential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential databricks_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.credential.Credential.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.Credential(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  purpose: str,
  aws_iam_role: CredentialAwsIamRole = None,
  azure_managed_identity: CredentialAzureManagedIdentity = None,
  azure_service_principal: CredentialAzureServicePrincipal = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  databricks_gcp_service_account: CredentialDatabricksGcpServiceAccount = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  full_name: str = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  skip_validation: typing.Union[bool, IResolvable] = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  used_for_managed_storage: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#name Credential#name}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#purpose Credential#purpose}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#comment Credential#comment}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_at Credential#created_at}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_by Credential#created_by}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_destroy Credential#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_update Credential#force_update}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#full_name Credential#full_name}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#id Credential#id}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#isolation_mode Credential#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#metastore_id Credential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#owner Credential#owner}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#read_only Credential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#skip_validation Credential#skip_validation}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_at Credential#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_by Credential#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.Initializer.parameter.usedForManagedStorage">used_for_managed_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#used_for_managed_storage Credential#used_for_managed_storage}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#name Credential#name}.

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.purpose"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#purpose Credential#purpose}.

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.awsIamRole"></a>

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#aws_iam_role Credential#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.azureManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#azure_managed_identity Credential#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.azureServicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#azure_service_principal Credential#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#comment Credential#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.createdAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_at Credential#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_by Credential#created_by}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.databricksGcpServiceAccount"></a>

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#databricks_gcp_service_account Credential#databricks_gcp_service_account}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_destroy Credential#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.forceUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_update Credential#force_update}.

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#full_name Credential#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#id Credential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#isolation_mode Credential#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#metastore_id Credential#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#owner Credential#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#read_only Credential#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.skipValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#skip_validation Credential#skip_validation}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.updatedAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_at Credential#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.updatedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_by Credential#updated_by}.

---

##### `used_for_managed_storage`<sup>Optional</sup> <a name="used_for_managed_storage" id="@cdktf/provider-databricks.credential.Credential.Initializer.parameter.usedForManagedStorage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#used_for_managed_storage Credential#used_for_managed_storage}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.putAwsIamRole">put_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.putAzureManagedIdentity">put_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.putAzureServicePrincipal">put_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.putDatabricksGcpServiceAccount">put_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetAwsIamRole">reset_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetAzureManagedIdentity">reset_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetAzureServicePrincipal">reset_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetDatabricksGcpServiceAccount">reset_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetSkipValidation">reset_skip_validation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.resetUsedForManagedStorage">reset_used_for_managed_storage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.credential.Credential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.credential.Credential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.credential.Credential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.credential.Credential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.credential.Credential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.credential.Credential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.credential.Credential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.credential.Credential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.credential.Credential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.credential.Credential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.credential.Credential.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.credential.Credential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.credential.Credential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.credential.Credential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.credential.Credential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.credential.Credential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.credential.Credential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.credential.Credential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.credential.Credential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.credential.Credential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.credential.Credential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.credential.Credential.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.credential.Credential.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.credential.Credential.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.credential.Credential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.credential.Credential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.Credential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.credential.Credential.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.credential.Credential.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.credential.Credential.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.credential.Credential.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.credential.Credential.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.credential.Credential.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.credential.Credential.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_iam_role` <a name="put_aws_iam_role" id="@cdktf/provider-databricks.credential.Credential.putAwsIamRole"></a>

```python
def put_aws_iam_role(
  external_id: str = None,
  role_arn: str = None,
  unity_catalog_iam_arn: str = None
) -> None
```

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.credential.Credential.putAwsIamRole.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#external_id Credential#external_id}.

---

###### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-databricks.credential.Credential.putAwsIamRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#role_arn Credential#role_arn}.

---

###### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.credential.Credential.putAwsIamRole.parameter.unityCatalogIamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#unity_catalog_iam_arn Credential#unity_catalog_iam_arn}.

---

##### `put_azure_managed_identity` <a name="put_azure_managed_identity" id="@cdktf/provider-databricks.credential.Credential.putAzureManagedIdentity"></a>

```python
def put_azure_managed_identity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
) -> None
```

###### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.credential.Credential.putAzureManagedIdentity.parameter.accessConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#access_connector_id Credential#access_connector_id}.

---

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.Credential.putAzureManagedIdentity.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#credential_id Credential#credential_id}.

---

###### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.credential.Credential.putAzureManagedIdentity.parameter.managedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#managed_identity_id Credential#managed_identity_id}.

---

##### `put_azure_service_principal` <a name="put_azure_service_principal" id="@cdktf/provider-databricks.credential.Credential.putAzureServicePrincipal"></a>

```python
def put_azure_service_principal(
  application_id: str,
  client_secret: str,
  directory_id: str
) -> None
```

###### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.credential.Credential.putAzureServicePrincipal.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#application_id Credential#application_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.credential.Credential.putAzureServicePrincipal.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#client_secret Credential#client_secret}.

---

###### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.credential.Credential.putAzureServicePrincipal.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#directory_id Credential#directory_id}.

---

##### `put_databricks_gcp_service_account` <a name="put_databricks_gcp_service_account" id="@cdktf/provider-databricks.credential.Credential.putDatabricksGcpServiceAccount"></a>

```python
def put_databricks_gcp_service_account(
  credential_id: str = None,
  email: str = None,
  private_key_id: str = None
) -> None
```

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.Credential.putDatabricksGcpServiceAccount.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#credential_id Credential#credential_id}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.credential.Credential.putDatabricksGcpServiceAccount.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#email Credential#email}.

---

###### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-databricks.credential.Credential.putDatabricksGcpServiceAccount.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#private_key_id Credential#private_key_id}.

---

##### `reset_aws_iam_role` <a name="reset_aws_iam_role" id="@cdktf/provider-databricks.credential.Credential.resetAwsIamRole"></a>

```python
def reset_aws_iam_role() -> None
```

##### `reset_azure_managed_identity` <a name="reset_azure_managed_identity" id="@cdktf/provider-databricks.credential.Credential.resetAzureManagedIdentity"></a>

```python
def reset_azure_managed_identity() -> None
```

##### `reset_azure_service_principal` <a name="reset_azure_service_principal" id="@cdktf/provider-databricks.credential.Credential.resetAzureServicePrincipal"></a>

```python
def reset_azure_service_principal() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.credential.Credential.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.credential.Credential.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.credential.Credential.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_databricks_gcp_service_account` <a name="reset_databricks_gcp_service_account" id="@cdktf/provider-databricks.credential.Credential.resetDatabricksGcpServiceAccount"></a>

```python
def reset_databricks_gcp_service_account() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-databricks.credential.Credential.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-databricks.credential.Credential.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.credential.Credential.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.credential.Credential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.credential.Credential.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.credential.Credential.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.credential.Credential.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.credential.Credential.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_skip_validation` <a name="reset_skip_validation" id="@cdktf/provider-databricks.credential.Credential.resetSkipValidation"></a>

```python
def reset_skip_validation() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.credential.Credential.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.credential.Credential.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```

##### `reset_used_for_managed_storage` <a name="reset_used_for_managed_storage" id="@cdktf/provider-databricks.credential.Credential.resetUsedForManagedStorage"></a>

```python
def reset_used_for_managed_storage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.credential.Credential.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.Credential.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.credential.Credential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.credential.Credential.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.Credential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.credential.Credential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.credential.Credential.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.Credential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.credential.Credential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.credential.Credential.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.Credential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.credential.Credential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.credential.Credential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Credential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.credential.Credential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Credential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.credential.Credential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Credential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference">CredentialAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference">CredentialAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference">CredentialAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference">CredentialDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.awsIamRoleInput">aws_iam_role_input</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.azureManagedIdentityInput">azure_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.azureServicePrincipalInput">azure_service_principal_input</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.databricksGcpServiceAccountInput">databricks_gcp_service_account_input</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.forceUpdateInput">force_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.purposeInput">purpose_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.skipValidationInput">skip_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.usedForManagedStorageInput">used_for_managed_storage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.purpose">purpose</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.usedForManagedStorage">used_for_managed_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.credential.Credential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.credential.Credential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.credential.Credential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.credential.Credential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.credential.Credential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.credential.Credential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.credential.Credential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.credential.Credential.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.credential.Credential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.credential.Credential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.credential.Credential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.credential.Credential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.credential.Credential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.credential.Credential.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_iam_role`<sup>Required</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.credential.Credential.property.awsIamRole"></a>

```python
aws_iam_role: CredentialAwsIamRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference">CredentialAwsIamRoleOutputReference</a>

---

##### `azure_managed_identity`<sup>Required</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.credential.Credential.property.azureManagedIdentity"></a>

```python
azure_managed_identity: CredentialAzureManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference">CredentialAzureManagedIdentityOutputReference</a>

---

##### `azure_service_principal`<sup>Required</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.credential.Credential.property.azureServicePrincipal"></a>

```python
azure_service_principal: CredentialAzureServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference">CredentialAzureServicePrincipalOutputReference</a>

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.Credential.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `databricks_gcp_service_account`<sup>Required</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.credential.Credential.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: CredentialDatabricksGcpServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference">CredentialDatabricksGcpServiceAccountOutputReference</a>

---

##### `aws_iam_role_input`<sup>Optional</sup> <a name="aws_iam_role_input" id="@cdktf/provider-databricks.credential.Credential.property.awsIamRoleInput"></a>

```python
aws_iam_role_input: CredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a>

---

##### `azure_managed_identity_input`<sup>Optional</sup> <a name="azure_managed_identity_input" id="@cdktf/provider-databricks.credential.Credential.property.azureManagedIdentityInput"></a>

```python
azure_managed_identity_input: CredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a>

---

##### `azure_service_principal_input`<sup>Optional</sup> <a name="azure_service_principal_input" id="@cdktf/provider-databricks.credential.Credential.property.azureServicePrincipalInput"></a>

```python
azure_service_principal_input: CredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.credential.Credential.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.credential.Credential.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.credential.Credential.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `databricks_gcp_service_account_input`<sup>Optional</sup> <a name="databricks_gcp_service_account_input" id="@cdktf/provider-databricks.credential.Credential.property.databricksGcpServiceAccountInput"></a>

```python
databricks_gcp_service_account_input: CredentialDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-databricks.credential.Credential.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-databricks.credential.Credential.property.forceUpdateInput"></a>

```python
force_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.credential.Credential.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.credential.Credential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.credential.Credential.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.credential.Credential.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.credential.Credential.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.credential.Credential.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `purpose_input`<sup>Optional</sup> <a name="purpose_input" id="@cdktf/provider-databricks.credential.Credential.property.purposeInput"></a>

```python
purpose_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.credential.Credential.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_validation_input`<sup>Optional</sup> <a name="skip_validation_input" id="@cdktf/provider-databricks.credential.Credential.property.skipValidationInput"></a>

```python
skip_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.credential.Credential.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.credential.Credential.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `used_for_managed_storage_input`<sup>Optional</sup> <a name="used_for_managed_storage_input" id="@cdktf/provider-databricks.credential.Credential.property.usedForManagedStorageInput"></a>

```python
used_for_managed_storage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.credential.Credential.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.credential.Credential.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.credential.Credential.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-databricks.credential.Credential.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-databricks.credential.Credential.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.credential.Credential.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.credential.Credential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.credential.Credential.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.credential.Credential.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.credential.Credential.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.credential.Credential.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-databricks.credential.Credential.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.credential.Credential.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_validation`<sup>Required</sup> <a name="skip_validation" id="@cdktf/provider-databricks.credential.Credential.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.credential.Credential.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.credential.Credential.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `used_for_managed_storage`<sup>Required</sup> <a name="used_for_managed_storage" id="@cdktf/provider-databricks.credential.Credential.property.usedForManagedStorage"></a>

```python
used_for_managed_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.Credential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.credential.Credential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CredentialAwsIamRole <a name="CredentialAwsIamRole" id="@cdktf/provider-databricks.credential.CredentialAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.credential.CredentialAwsIamRole.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialAwsIamRole(
  external_id: str = None,
  role_arn: str = None,
  unity_catalog_iam_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#external_id Credential#external_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#role_arn Credential#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#unity_catalog_iam_arn Credential#unity_catalog_iam_arn}. |

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.credential.CredentialAwsIamRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#external_id Credential#external_id}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#role_arn Credential#role_arn}.

---

##### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRole.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#unity_catalog_iam_arn Credential#unity_catalog_iam_arn}.

---

### CredentialAzureManagedIdentity <a name="CredentialAzureManagedIdentity" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialAzureManagedIdentity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#access_connector_id Credential#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#credential_id Credential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#managed_identity_id Credential#managed_identity_id}. |

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#access_connector_id Credential#access_connector_id}.

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#credential_id Credential#credential_id}.

---

##### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#managed_identity_id Credential#managed_identity_id}.

---

### CredentialAzureServicePrincipal <a name="CredentialAzureServicePrincipal" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialAzureServicePrincipal(
  application_id: str,
  client_secret: str,
  directory_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#application_id Credential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#client_secret Credential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#directory_id Credential#directory_id}. |

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#application_id Credential#application_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#client_secret Credential#client_secret}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#directory_id Credential#directory_id}.

---

### CredentialConfig <a name="CredentialConfig" id="@cdktf/provider-databricks.credential.CredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.credential.CredentialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  purpose: str,
  aws_iam_role: CredentialAwsIamRole = None,
  azure_managed_identity: CredentialAzureManagedIdentity = None,
  azure_service_principal: CredentialAzureServicePrincipal = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  databricks_gcp_service_account: CredentialDatabricksGcpServiceAccount = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  full_name: str = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  skip_validation: typing.Union[bool, IResolvable] = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  used_for_managed_storage: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#name Credential#name}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.purpose">purpose</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#purpose Credential#purpose}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#comment Credential#comment}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_at Credential#created_at}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_by Credential#created_by}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_destroy Credential#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_update Credential#force_update}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#full_name Credential#full_name}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#id Credential#id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#isolation_mode Credential#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#metastore_id Credential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#owner Credential#owner}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#read_only Credential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#skip_validation Credential#skip_validation}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_at Credential#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_by Credential#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialConfig.property.usedForManagedStorage">used_for_managed_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#used_for_managed_storage Credential#used_for_managed_storage}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.credential.CredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.credential.CredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.credential.CredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.credential.CredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.credential.CredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.credential.CredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.credential.CredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.credential.CredentialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#name Credential#name}.

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktf/provider-databricks.credential.CredentialConfig.property.purpose"></a>

```python
purpose: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#purpose Credential#purpose}.

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.credential.CredentialConfig.property.awsIamRole"></a>

```python
aws_iam_role: CredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#aws_iam_role Credential#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.credential.CredentialConfig.property.azureManagedIdentity"></a>

```python
azure_managed_identity: CredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#azure_managed_identity Credential#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.credential.CredentialConfig.property.azureServicePrincipal"></a>

```python
azure_service_principal: CredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#azure_service_principal Credential#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.credential.CredentialConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#comment Credential#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.credential.CredentialConfig.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_at Credential#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.credential.CredentialConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#created_by Credential#created_by}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.credential.CredentialConfig.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: CredentialDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#databricks_gcp_service_account Credential#databricks_gcp_service_account}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.credential.CredentialConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_destroy Credential#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.credential.CredentialConfig.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#force_update Credential#force_update}.

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.credential.CredentialConfig.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#full_name Credential#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.credential.CredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#id Credential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.credential.CredentialConfig.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#isolation_mode Credential#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.credential.CredentialConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#metastore_id Credential#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.credential.CredentialConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#owner Credential#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.credential.CredentialConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#read_only Credential#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.credential.CredentialConfig.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#skip_validation Credential#skip_validation}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.credential.CredentialConfig.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_at Credential#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.credential.CredentialConfig.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#updated_by Credential#updated_by}.

---

##### `used_for_managed_storage`<sup>Optional</sup> <a name="used_for_managed_storage" id="@cdktf/provider-databricks.credential.CredentialConfig.property.usedForManagedStorage"></a>

```python
used_for_managed_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#used_for_managed_storage Credential#used_for_managed_storage}.

---

### CredentialDatabricksGcpServiceAccount <a name="CredentialDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialDatabricksGcpServiceAccount(
  credential_id: str = None,
  email: str = None,
  private_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#credential_id Credential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#email Credential#email}. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#private_key_id Credential#private_key_id}. |

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#credential_id Credential#credential_id}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#email Credential#email}.

---

##### `private_key_id`<sup>Optional</sup> <a name="private_key_id" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.76.0/docs/resources/credential#private_key_id Credential#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CredentialAwsIamRoleOutputReference <a name="CredentialAwsIamRoleOutputReference" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialAwsIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resetUnityCatalogIamArn">reset_unity_catalog_iam_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_unity_catalog_iam_arn` <a name="reset_unity_catalog_iam_arn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```python
def reset_unity_catalog_iam_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.unityCatalogIamArnInput">unity_catalog_iam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn_input`<sup>Optional</sup> <a name="unity_catalog_iam_arn_input" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```python
unity_catalog_iam_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn`<sup>Required</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.credential.CredentialAwsIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: CredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAwsIamRole">CredentialAwsIamRole</a>

---


### CredentialAzureManagedIdentityOutputReference <a name="CredentialAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialAzureManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resetManagedIdentityId">reset_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_managed_identity_id` <a name="reset_managed_identity_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```python
def reset_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput">access_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.managedIdentityIdInput">managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_connector_id_input`<sup>Optional</sup> <a name="access_connector_id_input" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```python
access_connector_id_input: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `managed_identity_id_input`<sup>Optional</sup> <a name="managed_identity_id_input" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```python
managed_identity_id_input: str
```

- *Type:* str

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.credential.CredentialAzureManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: CredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureManagedIdentity">CredentialAzureManagedIdentity</a>

---


### CredentialAzureServicePrincipalOutputReference <a name="CredentialAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialAzureServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.credential.CredentialAzureServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: CredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialAzureServicePrincipal">CredentialAzureServicePrincipal</a>

---


### CredentialDatabricksGcpServiceAccountOutputReference <a name="CredentialDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import credential

credential.CredentialDatabricksGcpServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resetPrivateKeyId">reset_private_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_private_key_id` <a name="reset_private_key_id" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.resetPrivateKeyId"></a>

```python
def reset_private_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: CredentialDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.credential.CredentialDatabricksGcpServiceAccount">CredentialDatabricksGcpServiceAccount</a>

---



