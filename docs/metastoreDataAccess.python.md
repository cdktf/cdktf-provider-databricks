# `metastoreDataAccess` Submodule <a name="`metastoreDataAccess` Submodule" id="@cdktf/provider-databricks.metastoreDataAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MetastoreDataAccess <a name="MetastoreDataAccess" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access databricks_metastore_data_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccess(
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
  aws_iam_role: MetastoreDataAccessAwsIamRole = None,
  azure_managed_identity: MetastoreDataAccessAzureManagedIdentity = None,
  azure_service_principal: MetastoreDataAccessAzureServicePrincipal = None,
  comment: str = None,
  databricks_gcp_service_account: MetastoreDataAccessDatabricksGcpServiceAccount = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  gcp_service_account_key: MetastoreDataAccessGcpServiceAccountKey = None,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  skip_validation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#comment MetastoreDataAccess#comment}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_destroy MetastoreDataAccess#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_update MetastoreDataAccess#force_update}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#owner MetastoreDataAccess#owner}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#read_only MetastoreDataAccess#read_only}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#skip_validation MetastoreDataAccess#skip_validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}.

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.awsIamRole"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#aws_iam_role MetastoreDataAccess#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.azureManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#azure_managed_identity MetastoreDataAccess#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.azureServicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#azure_service_principal MetastoreDataAccess#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#comment MetastoreDataAccess#comment}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.databricksGcpServiceAccount"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#databricks_gcp_service_account MetastoreDataAccess#databricks_gcp_service_account}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_destroy MetastoreDataAccess#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.forceUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_update MetastoreDataAccess#force_update}.

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.gcpServiceAccountKey"></a>

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#gcp_service_account_key MetastoreDataAccess#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.isDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#owner MetastoreDataAccess#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#read_only MetastoreDataAccess#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.Initializer.parameter.skipValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#skip_validation MetastoreDataAccess#skip_validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole">put_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity">put_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal">put_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount">put_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey">put_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAwsIamRole">reset_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureManagedIdentity">reset_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureServicePrincipal">reset_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetDatabricksGcpServiceAccount">reset_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetGcpServiceAccountKey">reset_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetIsDefault">reset_is_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetSkipValidation">reset_skip_validation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_iam_role` <a name="put_aws_iam_role" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole"></a>

```python
def put_aws_iam_role(
  role_arn: str,
  external_id: str = None,
  unity_catalog_iam_arn: str = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#role_arn MetastoreDataAccess#role_arn}.

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#external_id MetastoreDataAccess#external_id}.

---

###### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAwsIamRole.parameter.unityCatalogIamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#unity_catalog_iam_arn MetastoreDataAccess#unity_catalog_iam_arn}.

---

##### `put_azure_managed_identity` <a name="put_azure_managed_identity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity"></a>

```python
def put_azure_managed_identity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
) -> None
```

###### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity.parameter.accessConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#access_connector_id MetastoreDataAccess#access_connector_id}.

---

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}.

---

###### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureManagedIdentity.parameter.managedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#managed_identity_id MetastoreDataAccess#managed_identity_id}.

---

##### `put_azure_service_principal` <a name="put_azure_service_principal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal"></a>

```python
def put_azure_service_principal(
  application_id: str,
  client_secret: str,
  directory_id: str
) -> None
```

###### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#application_id MetastoreDataAccess#application_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#client_secret MetastoreDataAccess#client_secret}.

---

###### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putAzureServicePrincipal.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#directory_id MetastoreDataAccess#directory_id}.

---

##### `put_databricks_gcp_service_account` <a name="put_databricks_gcp_service_account" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount"></a>

```python
def put_databricks_gcp_service_account(
  credential_id: str = None,
  email: str = None
) -> None
```

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putDatabricksGcpServiceAccount.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}.

---

##### `put_gcp_service_account_key` <a name="put_gcp_service_account_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey"></a>

```python
def put_gcp_service_account_key(
  email: str,
  private_key: str,
  private_key_id: str
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#private_key MetastoreDataAccess#private_key}.

---

###### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.putGcpServiceAccountKey.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#private_key_id MetastoreDataAccess#private_key_id}.

---

##### `reset_aws_iam_role` <a name="reset_aws_iam_role" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAwsIamRole"></a>

```python
def reset_aws_iam_role() -> None
```

##### `reset_azure_managed_identity` <a name="reset_azure_managed_identity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureManagedIdentity"></a>

```python
def reset_azure_managed_identity() -> None
```

##### `reset_azure_service_principal` <a name="reset_azure_service_principal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetAzureServicePrincipal"></a>

```python
def reset_azure_service_principal() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_databricks_gcp_service_account` <a name="reset_databricks_gcp_service_account" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetDatabricksGcpServiceAccount"></a>

```python
def reset_databricks_gcp_service_account() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_gcp_service_account_key` <a name="reset_gcp_service_account_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetGcpServiceAccountKey"></a>

```python
def reset_gcp_service_account_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_default` <a name="reset_is_default" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetIsDefault"></a>

```python
def reset_is_default() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_skip_validation` <a name="reset_skip_validation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.resetSkipValidation"></a>

```python
def reset_skip_validation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MetastoreDataAccess resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccess.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccess.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccess.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccess.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MetastoreDataAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MetastoreDataAccess to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MetastoreDataAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MetastoreDataAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference">MetastoreDataAccessAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference">MetastoreDataAccessAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference">MetastoreDataAccessAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference">MetastoreDataAccessDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference">MetastoreDataAccessGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRoleInput">aws_iam_role_input</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentityInput">azure_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipalInput">azure_service_principal_input</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccountInput">databricks_gcp_service_account_input</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdateInput">force_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKeyInput">gcp_service_account_key_input</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefaultInput">is_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidationInput">skip_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_iam_role`<sup>Required</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRole"></a>

```python
aws_iam_role: MetastoreDataAccessAwsIamRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference">MetastoreDataAccessAwsIamRoleOutputReference</a>

---

##### `azure_managed_identity`<sup>Required</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentity"></a>

```python
azure_managed_identity: MetastoreDataAccessAzureManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference">MetastoreDataAccessAzureManagedIdentityOutputReference</a>

---

##### `azure_service_principal`<sup>Required</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipal"></a>

```python
azure_service_principal: MetastoreDataAccessAzureServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference">MetastoreDataAccessAzureServicePrincipalOutputReference</a>

---

##### `databricks_gcp_service_account`<sup>Required</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: MetastoreDataAccessDatabricksGcpServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference">MetastoreDataAccessDatabricksGcpServiceAccountOutputReference</a>

---

##### `gcp_service_account_key`<sup>Required</sup> <a name="gcp_service_account_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: MetastoreDataAccessGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference">MetastoreDataAccessGcpServiceAccountKeyOutputReference</a>

---

##### `aws_iam_role_input`<sup>Optional</sup> <a name="aws_iam_role_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.awsIamRoleInput"></a>

```python
aws_iam_role_input: MetastoreDataAccessAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

---

##### `azure_managed_identity_input`<sup>Optional</sup> <a name="azure_managed_identity_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureManagedIdentityInput"></a>

```python
azure_managed_identity_input: MetastoreDataAccessAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

---

##### `azure_service_principal_input`<sup>Optional</sup> <a name="azure_service_principal_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.azureServicePrincipalInput"></a>

```python
azure_service_principal_input: MetastoreDataAccessAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `databricks_gcp_service_account_input`<sup>Optional</sup> <a name="databricks_gcp_service_account_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.databricksGcpServiceAccountInput"></a>

```python
databricks_gcp_service_account_input: MetastoreDataAccessDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdateInput"></a>

```python
force_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_service_account_key_input`<sup>Optional</sup> <a name="gcp_service_account_key_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.gcpServiceAccountKeyInput"></a>

```python
gcp_service_account_key_input: MetastoreDataAccessGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_default_input`<sup>Optional</sup> <a name="is_default_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefaultInput"></a>

```python
is_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_validation_input`<sup>Optional</sup> <a name="skip_validation_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidationInput"></a>

```python
skip_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_validation`<sup>Required</sup> <a name="skip_validation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccess.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MetastoreDataAccessAwsIamRole <a name="MetastoreDataAccessAwsIamRole" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessAwsIamRole(
  role_arn: str,
  external_id: str = None,
  unity_catalog_iam_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#role_arn MetastoreDataAccess#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#external_id MetastoreDataAccess#external_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#unity_catalog_iam_arn MetastoreDataAccess#unity_catalog_iam_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#role_arn MetastoreDataAccess#role_arn}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#external_id MetastoreDataAccess#external_id}.

---

##### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#unity_catalog_iam_arn MetastoreDataAccess#unity_catalog_iam_arn}.

---

### MetastoreDataAccessAzureManagedIdentity <a name="MetastoreDataAccessAzureManagedIdentity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#access_connector_id MetastoreDataAccess#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#managed_identity_id MetastoreDataAccess#managed_identity_id}. |

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#access_connector_id MetastoreDataAccess#access_connector_id}.

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}.

---

##### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#managed_identity_id MetastoreDataAccess#managed_identity_id}.

---

### MetastoreDataAccessAzureServicePrincipal <a name="MetastoreDataAccessAzureServicePrincipal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal(
  application_id: str,
  client_secret: str,
  directory_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#application_id MetastoreDataAccess#application_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#client_secret MetastoreDataAccess#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#directory_id MetastoreDataAccess#directory_id}. |

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#application_id MetastoreDataAccess#application_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#client_secret MetastoreDataAccess#client_secret}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#directory_id MetastoreDataAccess#directory_id}.

---

### MetastoreDataAccessConfig <a name="MetastoreDataAccessConfig" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  aws_iam_role: MetastoreDataAccessAwsIamRole = None,
  azure_managed_identity: MetastoreDataAccessAzureManagedIdentity = None,
  azure_service_principal: MetastoreDataAccessAzureServicePrincipal = None,
  comment: str = None,
  databricks_gcp_service_account: MetastoreDataAccessDatabricksGcpServiceAccount = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  gcp_service_account_key: MetastoreDataAccessGcpServiceAccountKey = None,
  id: str = None,
  is_default: typing.Union[bool, IResolvable] = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  skip_validation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#comment MetastoreDataAccess#comment}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_destroy MetastoreDataAccess#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_update MetastoreDataAccess#force_update}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.isDefault">is_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#owner MetastoreDataAccess#owner}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#read_only MetastoreDataAccess#read_only}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#skip_validation MetastoreDataAccess#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#name MetastoreDataAccess#name}.

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.awsIamRole"></a>

```python
aws_iam_role: MetastoreDataAccessAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#aws_iam_role MetastoreDataAccess#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureManagedIdentity"></a>

```python
azure_managed_identity: MetastoreDataAccessAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#azure_managed_identity MetastoreDataAccess#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.azureServicePrincipal"></a>

```python
azure_service_principal: MetastoreDataAccessAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#azure_service_principal MetastoreDataAccess#azure_service_principal}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#comment MetastoreDataAccess#comment}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: MetastoreDataAccessDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#databricks_gcp_service_account MetastoreDataAccess#databricks_gcp_service_account}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_destroy MetastoreDataAccess#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#force_update MetastoreDataAccess#force_update}.

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: MetastoreDataAccessGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#gcp_service_account_key MetastoreDataAccess#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#id MetastoreDataAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_default`<sup>Optional</sup> <a name="is_default" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.isDefault"></a>

```python
is_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#is_default MetastoreDataAccess#is_default}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#metastore_id MetastoreDataAccess#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#owner MetastoreDataAccess#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#read_only MetastoreDataAccess#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessConfig.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#skip_validation MetastoreDataAccess#skip_validation}.

---

### MetastoreDataAccessDatabricksGcpServiceAccount <a name="MetastoreDataAccessDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount(
  credential_id: str = None,
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}. |

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#credential_id MetastoreDataAccess#credential_id}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}.

---

### MetastoreDataAccessGcpServiceAccountKey <a name="MetastoreDataAccessGcpServiceAccountKey" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey(
  email: str,
  private_key: str,
  private_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#private_key MetastoreDataAccess#private_key}. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#private_key_id MetastoreDataAccess#private_key_id}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#email MetastoreDataAccess#email}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#private_key MetastoreDataAccess#private_key}.

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.41.0/docs/resources/metastore_data_access#private_key_id MetastoreDataAccess#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MetastoreDataAccessAwsIamRoleOutputReference <a name="MetastoreDataAccessAwsIamRoleOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetUnityCatalogIamArn">reset_unity_catalog_iam_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_unity_catalog_iam_arn` <a name="reset_unity_catalog_iam_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```python
def reset_unity_catalog_iam_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArnInput">unity_catalog_iam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn_input`<sup>Optional</sup> <a name="unity_catalog_iam_arn_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```python
unity_catalog_iam_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn`<sup>Required</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: MetastoreDataAccessAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAwsIamRole">MetastoreDataAccessAwsIamRole</a>

---


### MetastoreDataAccessAzureManagedIdentityOutputReference <a name="MetastoreDataAccessAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetManagedIdentityId">reset_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_managed_identity_id` <a name="reset_managed_identity_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```python
def reset_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorIdInput">access_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityIdInput">managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_connector_id_input`<sup>Optional</sup> <a name="access_connector_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```python
access_connector_id_input: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `managed_identity_id_input`<sup>Optional</sup> <a name="managed_identity_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```python
managed_identity_id_input: str
```

- *Type:* str

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MetastoreDataAccessAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureManagedIdentity">MetastoreDataAccessAzureManagedIdentity</a>

---


### MetastoreDataAccessAzureServicePrincipalOutputReference <a name="MetastoreDataAccessAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: MetastoreDataAccessAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessAzureServicePrincipal">MetastoreDataAccessAzureServicePrincipal</a>

---


### MetastoreDataAccessDatabricksGcpServiceAccountOutputReference <a name="MetastoreDataAccessDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: MetastoreDataAccessDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessDatabricksGcpServiceAccount">MetastoreDataAccessDatabricksGcpServiceAccount</a>

---


### MetastoreDataAccessGcpServiceAccountKeyOutputReference <a name="MetastoreDataAccessGcpServiceAccountKeyOutputReference" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import metastore_data_access

metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```python
internal_value: MetastoreDataAccessGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.metastoreDataAccess.MetastoreDataAccessGcpServiceAccountKey">MetastoreDataAccessGcpServiceAccountKey</a>

---



