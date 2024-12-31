# `storageCredential` Submodule <a name="`storageCredential` Submodule" id="@cdktf/provider-databricks.storageCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageCredential <a name="StorageCredential" id="@cdktf/provider-databricks.storageCredential.StorageCredential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential databricks_storage_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredential(
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
  aws_iam_role: StorageCredentialAwsIamRole = None,
  azure_managed_identity: StorageCredentialAzureManagedIdentity = None,
  azure_service_principal: StorageCredentialAzureServicePrincipal = None,
  cloudflare_api_token: StorageCredentialCloudflareApiToken = None,
  comment: str = None,
  databricks_gcp_service_account: StorageCredentialDatabricksGcpServiceAccount = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  gcp_service_account_key: StorageCredentialGcpServiceAccountKey = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  skip_validation: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#name StorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.cloudflareApiToken">cloudflare_api_token</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | cloudflare_api_token block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#comment StorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_update StorageCredential#force_update}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#id StorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#isolation_mode StorageCredential#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#owner StorageCredential#owner}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#read_only StorageCredential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#skip_validation StorageCredential#skip_validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#name StorageCredential#name}.

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.awsIamRole"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#aws_iam_role StorageCredential#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.azureServicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#azure_service_principal StorageCredential#azure_service_principal}

---

##### `cloudflare_api_token`<sup>Optional</sup> <a name="cloudflare_api_token" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.cloudflareApiToken"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

cloudflare_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#cloudflare_api_token StorageCredential#cloudflare_api_token}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#comment StorageCredential#comment}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.databricksGcpServiceAccount"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#databricks_gcp_service_account StorageCredential#databricks_gcp_service_account}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.forceUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_update StorageCredential#force_update}.

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.gcpServiceAccountKey"></a>

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#id StorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#isolation_mode StorageCredential#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#owner StorageCredential#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#read_only StorageCredential#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.storageCredential.StorageCredential.Initializer.parameter.skipValidation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#skip_validation StorageCredential#skip_validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole">put_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity">put_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal">put_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken">put_cloudflare_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount">put_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey">put_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole">reset_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity">reset_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal">reset_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetCloudflareApiToken">reset_cloudflare_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetDatabricksGcpServiceAccount">reset_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceUpdate">reset_force_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey">reset_gcp_service_account_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.resetSkipValidation">reset_skip_validation</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.storageCredential.StorageCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.storageCredential.StorageCredential.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.storageCredential.StorageCredential.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aws_iam_role` <a name="put_aws_iam_role" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole"></a>

```python
def put_aws_iam_role(
  role_arn: str,
  external_id: str = None,
  unity_catalog_iam_arn: str = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#role_arn StorageCredential#role_arn}.

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#external_id StorageCredential#external_id}.

---

###### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAwsIamRole.parameter.unityCatalogIamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#unity_catalog_iam_arn StorageCredential#unity_catalog_iam_arn}.

---

##### `put_azure_managed_identity` <a name="put_azure_managed_identity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity"></a>

```python
def put_azure_managed_identity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
) -> None
```

###### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity.parameter.accessConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#access_connector_id StorageCredential#access_connector_id}.

---

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#credential_id StorageCredential#credential_id}.

---

###### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureManagedIdentity.parameter.managedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#managed_identity_id StorageCredential#managed_identity_id}.

---

##### `put_azure_service_principal` <a name="put_azure_service_principal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal"></a>

```python
def put_azure_service_principal(
  application_id: str,
  client_secret: str,
  directory_id: str
) -> None
```

###### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#application_id StorageCredential#application_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#client_secret StorageCredential#client_secret}.

---

###### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putAzureServicePrincipal.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#directory_id StorageCredential#directory_id}.

---

##### `put_cloudflare_api_token` <a name="put_cloudflare_api_token" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken"></a>

```python
def put_cloudflare_api_token(
  access_key_id: str,
  account_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#access_key_id StorageCredential#access_key_id}.

---

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#account_id StorageCredential#account_id}.

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putCloudflareApiToken.parameter.secretAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#secret_access_key StorageCredential#secret_access_key}.

---

##### `put_databricks_gcp_service_account` <a name="put_databricks_gcp_service_account" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount"></a>

```python
def put_databricks_gcp_service_account(
  credential_id: str = None,
  email: str = None
) -> None
```

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#credential_id StorageCredential#credential_id}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putDatabricksGcpServiceAccount.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#email StorageCredential#email}.

---

##### `put_gcp_service_account_key` <a name="put_gcp_service_account_key" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey"></a>

```python
def put_gcp_service_account_key(
  email: str,
  private_key: str,
  private_key_id: str
) -> None
```

###### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#email StorageCredential#email}.

---

###### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#private_key StorageCredential#private_key}.

---

###### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.putGcpServiceAccountKey.parameter.privateKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#private_key_id StorageCredential#private_key_id}.

---

##### `reset_aws_iam_role` <a name="reset_aws_iam_role" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAwsIamRole"></a>

```python
def reset_aws_iam_role() -> None
```

##### `reset_azure_managed_identity` <a name="reset_azure_managed_identity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureManagedIdentity"></a>

```python
def reset_azure_managed_identity() -> None
```

##### `reset_azure_service_principal` <a name="reset_azure_service_principal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetAzureServicePrincipal"></a>

```python
def reset_azure_service_principal() -> None
```

##### `reset_cloudflare_api_token` <a name="reset_cloudflare_api_token" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetCloudflareApiToken"></a>

```python
def reset_cloudflare_api_token() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_databricks_gcp_service_account` <a name="reset_databricks_gcp_service_account" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetDatabricksGcpServiceAccount"></a>

```python
def reset_databricks_gcp_service_account() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_force_update` <a name="reset_force_update" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetForceUpdate"></a>

```python
def reset_force_update() -> None
```

##### `reset_gcp_service_account_key` <a name="reset_gcp_service_account_key" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetGcpServiceAccountKey"></a>

```python
def reset_gcp_service_account_key() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_skip_validation` <a name="reset_skip_validation" id="@cdktf/provider-databricks.storageCredential.StorageCredential.resetSkipValidation"></a>

```python
def reset_skip_validation() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageCredential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredential.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.storageCredential.StorageCredential.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiToken">cloudflare_api_token</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference">StorageCredentialCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference">StorageCredentialDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.storageCredentialId">storage_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput">aws_iam_role_input</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput">azure_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput">azure_service_principal_input</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiTokenInput">cloudflare_api_token_input</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccountInput">databricks_gcp_service_account_input</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdateInput">force_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput">gcp_service_account_key_input</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidationInput">skip_validation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_iam_role`<sup>Required</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRole"></a>

```python
aws_iam_role: StorageCredentialAwsIamRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference">StorageCredentialAwsIamRoleOutputReference</a>

---

##### `azure_managed_identity`<sup>Required</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentity"></a>

```python
azure_managed_identity: StorageCredentialAzureManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference">StorageCredentialAzureManagedIdentityOutputReference</a>

---

##### `azure_service_principal`<sup>Required</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipal"></a>

```python
azure_service_principal: StorageCredentialAzureServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference">StorageCredentialAzureServicePrincipalOutputReference</a>

---

##### `cloudflare_api_token`<sup>Required</sup> <a name="cloudflare_api_token" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiToken"></a>

```python
cloudflare_api_token: StorageCredentialCloudflareApiTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference">StorageCredentialCloudflareApiTokenOutputReference</a>

---

##### `databricks_gcp_service_account`<sup>Required</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: StorageCredentialDatabricksGcpServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference">StorageCredentialDatabricksGcpServiceAccountOutputReference</a>

---

##### `gcp_service_account_key`<sup>Required</sup> <a name="gcp_service_account_key" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: StorageCredentialGcpServiceAccountKeyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference">StorageCredentialGcpServiceAccountKeyOutputReference</a>

---

##### `storage_credential_id`<sup>Required</sup> <a name="storage_credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.storageCredentialId"></a>

```python
storage_credential_id: str
```

- *Type:* str

---

##### `aws_iam_role_input`<sup>Optional</sup> <a name="aws_iam_role_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.awsIamRoleInput"></a>

```python
aws_iam_role_input: StorageCredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---

##### `azure_managed_identity_input`<sup>Optional</sup> <a name="azure_managed_identity_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureManagedIdentityInput"></a>

```python
azure_managed_identity_input: StorageCredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---

##### `azure_service_principal_input`<sup>Optional</sup> <a name="azure_service_principal_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.azureServicePrincipalInput"></a>

```python
azure_service_principal_input: StorageCredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---

##### `cloudflare_api_token_input`<sup>Optional</sup> <a name="cloudflare_api_token_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.cloudflareApiTokenInput"></a>

```python
cloudflare_api_token_input: StorageCredentialCloudflareApiToken
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `databricks_gcp_service_account_input`<sup>Optional</sup> <a name="databricks_gcp_service_account_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.databricksGcpServiceAccountInput"></a>

```python
databricks_gcp_service_account_input: StorageCredentialDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update_input`<sup>Optional</sup> <a name="force_update_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdateInput"></a>

```python
force_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `gcp_service_account_key_input`<sup>Optional</sup> <a name="gcp_service_account_key_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.gcpServiceAccountKeyInput"></a>

```python
gcp_service_account_key_input: StorageCredentialGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_validation_input`<sup>Optional</sup> <a name="skip_validation_input" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidationInput"></a>

```python
skip_validation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_update`<sup>Required</sup> <a name="force_update" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `skip_validation`<sup>Required</sup> <a name="skip_validation" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.storageCredential.StorageCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageCredentialAwsIamRole <a name="StorageCredentialAwsIamRole" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialAwsIamRole(
  role_arn: str,
  external_id: str = None,
  unity_catalog_iam_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#role_arn StorageCredential#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#external_id StorageCredential#external_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#unity_catalog_iam_arn StorageCredential#unity_catalog_iam_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#role_arn StorageCredential#role_arn}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#external_id StorageCredential#external_id}.

---

##### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#unity_catalog_iam_arn StorageCredential#unity_catalog_iam_arn}.

---

### StorageCredentialAzureManagedIdentity <a name="StorageCredentialAzureManagedIdentity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialAzureManagedIdentity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#access_connector_id StorageCredential#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#credential_id StorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#managed_identity_id StorageCredential#managed_identity_id}. |

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#access_connector_id StorageCredential#access_connector_id}.

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#credential_id StorageCredential#credential_id}.

---

##### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#managed_identity_id StorageCredential#managed_identity_id}.

---

### StorageCredentialAzureServicePrincipal <a name="StorageCredentialAzureServicePrincipal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialAzureServicePrincipal(
  application_id: str,
  client_secret: str,
  directory_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#application_id StorageCredential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#client_secret StorageCredential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#directory_id StorageCredential#directory_id}. |

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#application_id StorageCredential#application_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#client_secret StorageCredential#client_secret}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#directory_id StorageCredential#directory_id}.

---

### StorageCredentialCloudflareApiToken <a name="StorageCredentialCloudflareApiToken" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialCloudflareApiToken(
  access_key_id: str,
  account_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#access_key_id StorageCredential#access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#account_id StorageCredential#account_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#secret_access_key StorageCredential#secret_access_key}. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#access_key_id StorageCredential#access_key_id}.

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#account_id StorageCredential#account_id}.

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#secret_access_key StorageCredential#secret_access_key}.

---

### StorageCredentialConfig <a name="StorageCredentialConfig" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  aws_iam_role: StorageCredentialAwsIamRole = None,
  azure_managed_identity: StorageCredentialAzureManagedIdentity = None,
  azure_service_principal: StorageCredentialAzureServicePrincipal = None,
  cloudflare_api_token: StorageCredentialCloudflareApiToken = None,
  comment: str = None,
  databricks_gcp_service_account: StorageCredentialDatabricksGcpServiceAccount = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  force_update: typing.Union[bool, IResolvable] = None,
  gcp_service_account_key: StorageCredentialGcpServiceAccountKey = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  skip_validation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#name StorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.cloudflareApiToken">cloudflare_api_token</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | cloudflare_api_token block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#comment StorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceUpdate">force_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_update StorageCredential#force_update}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey">gcp_service_account_key</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | gcp_service_account_key block. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#id StorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#isolation_mode StorageCredential#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#owner StorageCredential#owner}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#read_only StorageCredential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.skipValidation">skip_validation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#skip_validation StorageCredential#skip_validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#name StorageCredential#name}.

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.awsIamRole"></a>

```python
aws_iam_role: StorageCredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#aws_iam_role StorageCredential#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureManagedIdentity"></a>

```python
azure_managed_identity: StorageCredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#azure_managed_identity StorageCredential#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.azureServicePrincipal"></a>

```python
azure_service_principal: StorageCredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#azure_service_principal StorageCredential#azure_service_principal}

---

##### `cloudflare_api_token`<sup>Optional</sup> <a name="cloudflare_api_token" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.cloudflareApiToken"></a>

```python
cloudflare_api_token: StorageCredentialCloudflareApiToken
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

cloudflare_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#cloudflare_api_token StorageCredential#cloudflare_api_token}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#comment StorageCredential#comment}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: StorageCredentialDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#databricks_gcp_service_account StorageCredential#databricks_gcp_service_account}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_destroy StorageCredential#force_destroy}.

---

##### `force_update`<sup>Optional</sup> <a name="force_update" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.forceUpdate"></a>

```python
force_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#force_update StorageCredential#force_update}.

---

##### `gcp_service_account_key`<sup>Optional</sup> <a name="gcp_service_account_key" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.gcpServiceAccountKey"></a>

```python
gcp_service_account_key: StorageCredentialGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

gcp_service_account_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#gcp_service_account_key StorageCredential#gcp_service_account_key}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#id StorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#isolation_mode StorageCredential#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#metastore_id StorageCredential#metastore_id}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#owner StorageCredential#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#read_only StorageCredential#read_only}.

---

##### `skip_validation`<sup>Optional</sup> <a name="skip_validation" id="@cdktf/provider-databricks.storageCredential.StorageCredentialConfig.property.skipValidation"></a>

```python
skip_validation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#skip_validation StorageCredential#skip_validation}.

---

### StorageCredentialDatabricksGcpServiceAccount <a name="StorageCredentialDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialDatabricksGcpServiceAccount(
  credential_id: str = None,
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#credential_id StorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#email StorageCredential#email}. |

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#credential_id StorageCredential#credential_id}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#email StorageCredential#email}.

---

### StorageCredentialGcpServiceAccountKey <a name="StorageCredentialGcpServiceAccountKey" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialGcpServiceAccountKey(
  email: str,
  private_key: str,
  private_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#email StorageCredential#email}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#private_key StorageCredential#private_key}. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId">private_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#private_key_id StorageCredential#private_key_id}. |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#email StorageCredential#email}.

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#private_key StorageCredential#private_key}.

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs/resources/storage_credential#private_key_id StorageCredential#private_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageCredentialAwsIamRoleOutputReference <a name="StorageCredentialAwsIamRoleOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialAwsIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetUnityCatalogIamArn">reset_unity_catalog_iam_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_unity_catalog_iam_arn` <a name="reset_unity_catalog_iam_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```python
def reset_unity_catalog_iam_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArnInput">unity_catalog_iam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn_input`<sup>Optional</sup> <a name="unity_catalog_iam_arn_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```python
unity_catalog_iam_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn`<sup>Required</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: StorageCredentialAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAwsIamRole">StorageCredentialAwsIamRole</a>

---


### StorageCredentialAzureManagedIdentityOutputReference <a name="StorageCredentialAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialAzureManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetManagedIdentityId">reset_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_managed_identity_id` <a name="reset_managed_identity_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```python
def reset_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput">access_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityIdInput">managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_connector_id_input`<sup>Optional</sup> <a name="access_connector_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```python
access_connector_id_input: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `managed_identity_id_input`<sup>Optional</sup> <a name="managed_identity_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```python
managed_identity_id_input: str
```

- *Type:* str

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: StorageCredentialAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureManagedIdentity">StorageCredentialAzureManagedIdentity</a>

---


### StorageCredentialAzureServicePrincipalOutputReference <a name="StorageCredentialAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialAzureServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: StorageCredentialAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialAzureServicePrincipal">StorageCredentialAzureServicePrincipal</a>

---


### StorageCredentialCloudflareApiTokenOutputReference <a name="StorageCredentialCloudflareApiTokenOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialCloudflareApiTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiTokenOutputReference.property.internalValue"></a>

```python
internal_value: StorageCredentialCloudflareApiToken
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialCloudflareApiToken">StorageCredentialCloudflareApiToken</a>

---


### StorageCredentialDatabricksGcpServiceAccountOutputReference <a name="StorageCredentialDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: StorageCredentialDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialDatabricksGcpServiceAccount">StorageCredentialDatabricksGcpServiceAccount</a>

---


### StorageCredentialGcpServiceAccountKeyOutputReference <a name="StorageCredentialGcpServiceAccountKeyOutputReference" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import storage_credential

storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput">private_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId">private_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `private_key_id_input`<sup>Optional</sup> <a name="private_key_id_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyIdInput"></a>

```python
private_key_id_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `private_key_id`<sup>Required</sup> <a name="private_key_id" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.privateKeyId"></a>

```python
private_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```python
internal_value: StorageCredentialGcpServiceAccountKey
```

- *Type:* <a href="#@cdktf/provider-databricks.storageCredential.StorageCredentialGcpServiceAccountKey">StorageCredentialGcpServiceAccountKey</a>

---



