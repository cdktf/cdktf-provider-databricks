# `dataDatabricksStorageCredential` Submodule <a name="`dataDatabricksStorageCredential` Submodule" id="@cdktf/provider-databricks.dataDatabricksStorageCredential"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksStorageCredential <a name="DataDatabricksStorageCredential" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential databricks_storage_credential}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredential(
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
  id: str = None,
  storage_credential_info: DataDatabricksStorageCredentialStorageCredentialInfo = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.storageCredentialInfo">storage_credential_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | storage_credential_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_credential_info`<sup>Optional</sup> <a name="storage_credential_info" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.Initializer.parameter.storageCredentialInfo"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

storage_credential_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#storage_credential_info DataDatabricksStorageCredential#storage_credential_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo">put_storage_credential_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetStorageCredentialInfo">reset_storage_credential_info</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_storage_credential_info` <a name="put_storage_credential_info" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo"></a>

```python
def put_storage_credential_info(
  aws_iam_role: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole = None,
  azure_managed_identity: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity = None,
  azure_service_principal: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal = None,
  cloudflare_api_token: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  databricks_gcp_service_account: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount = None,
  full_name: str = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  used_for_managed_storage: typing.Union[bool, IResolvable] = None
) -> None
```

###### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.awsIamRole"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#aws_iam_role DataDatabricksStorageCredential#aws_iam_role}

---

###### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.azureManagedIdentity"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#azure_managed_identity DataDatabricksStorageCredential#azure_managed_identity}

---

###### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.azureServicePrincipal"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#azure_service_principal DataDatabricksStorageCredential#azure_service_principal}

---

###### `cloudflare_api_token`<sup>Optional</sup> <a name="cloudflare_api_token" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.cloudflareApiToken"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

cloudflare_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#cloudflare_api_token DataDatabricksStorageCredential#cloudflare_api_token}

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#comment DataDatabricksStorageCredential#comment}.

---

###### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.createdAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#created_at DataDatabricksStorageCredential#created_at}.

---

###### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#created_by DataDatabricksStorageCredential#created_by}.

---

###### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.databricksGcpServiceAccount"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#databricks_gcp_service_account DataDatabricksStorageCredential#databricks_gcp_service_account}

---

###### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.fullName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#full_name DataDatabricksStorageCredential#full_name}.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.isolationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#isolation_mode DataDatabricksStorageCredential#isolation_mode}.

---

###### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#metastore_id DataDatabricksStorageCredential#metastore_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}.

---

###### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.owner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#owner DataDatabricksStorageCredential#owner}.

---

###### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.readOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#read_only DataDatabricksStorageCredential#read_only}.

---

###### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.updatedAt"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#updated_at DataDatabricksStorageCredential#updated_at}.

---

###### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.updatedBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#updated_by DataDatabricksStorageCredential#updated_by}.

---

###### `used_for_managed_storage`<sup>Optional</sup> <a name="used_for_managed_storage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.putStorageCredentialInfo.parameter.usedForManagedStorage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#used_for_managed_storage DataDatabricksStorageCredential#used_for_managed_storage}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_storage_credential_info` <a name="reset_storage_credential_info" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.resetStorageCredentialInfo"></a>

```python
def reset_storage_credential_info() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksStorageCredential resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredential.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredential.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredential.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredential.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksStorageCredential resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksStorageCredential to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksStorageCredential that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksStorageCredential to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfo">storage_credential_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfoInput">storage_credential_info_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `storage_credential_info`<sup>Required</sup> <a name="storage_credential_info" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfo"></a>

```python
storage_credential_info: DataDatabricksStorageCredentialStorageCredentialInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `storage_credential_info_input`<sup>Optional</sup> <a name="storage_credential_info_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.storageCredentialInfoInput"></a>

```python
storage_credential_info_input: DataDatabricksStorageCredentialStorageCredentialInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredential.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksStorageCredentialConfig <a name="DataDatabricksStorageCredentialConfig" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  storage_credential_info: DataDatabricksStorageCredentialStorageCredentialInfo = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.storageCredentialInfo">storage_credential_info</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | storage_credential_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `storage_credential_info`<sup>Optional</sup> <a name="storage_credential_info" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialConfig.property.storageCredentialInfo"></a>

```python
storage_credential_info: DataDatabricksStorageCredentialStorageCredentialInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

storage_credential_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#storage_credential_info DataDatabricksStorageCredential#storage_credential_info}

---

### DataDatabricksStorageCredentialStorageCredentialInfo <a name="DataDatabricksStorageCredentialStorageCredentialInfo" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo(
  aws_iam_role: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole = None,
  azure_managed_identity: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity = None,
  azure_service_principal: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal = None,
  cloudflare_api_token: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  databricks_gcp_service_account: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount = None,
  full_name: str = None,
  id: str = None,
  isolation_mode: str = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  read_only: typing.Union[bool, IResolvable] = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None,
  used_for_managed_storage: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a></code> | aws_iam_role block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a></code> | azure_managed_identity block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a></code> | azure_service_principal block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.cloudflareApiToken">cloudflare_api_token</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a></code> | cloudflare_api_token block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#comment DataDatabricksStorageCredential#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#created_at DataDatabricksStorageCredential#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#created_by DataDatabricksStorageCredential#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a></code> | databricks_gcp_service_account block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#full_name DataDatabricksStorageCredential#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.isolationMode">isolation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#isolation_mode DataDatabricksStorageCredential#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#metastore_id DataDatabricksStorageCredential#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#owner DataDatabricksStorageCredential#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#read_only DataDatabricksStorageCredential#read_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#updated_at DataDatabricksStorageCredential#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#updated_by DataDatabricksStorageCredential#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.usedForManagedStorage">used_for_managed_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#used_for_managed_storage DataDatabricksStorageCredential#used_for_managed_storage}. |

---

##### `aws_iam_role`<sup>Optional</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.awsIamRole"></a>

```python
aws_iam_role: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

aws_iam_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#aws_iam_role DataDatabricksStorageCredential#aws_iam_role}

---

##### `azure_managed_identity`<sup>Optional</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureManagedIdentity"></a>

```python
azure_managed_identity: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

azure_managed_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#azure_managed_identity DataDatabricksStorageCredential#azure_managed_identity}

---

##### `azure_service_principal`<sup>Optional</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.azureServicePrincipal"></a>

```python
azure_service_principal: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

azure_service_principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#azure_service_principal DataDatabricksStorageCredential#azure_service_principal}

---

##### `cloudflare_api_token`<sup>Optional</sup> <a name="cloudflare_api_token" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.cloudflareApiToken"></a>

```python
cloudflare_api_token: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

cloudflare_api_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#cloudflare_api_token DataDatabricksStorageCredential#cloudflare_api_token}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#comment DataDatabricksStorageCredential#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#created_at DataDatabricksStorageCredential#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#created_by DataDatabricksStorageCredential#created_by}.

---

##### `databricks_gcp_service_account`<sup>Optional</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

databricks_gcp_service_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#databricks_gcp_service_account DataDatabricksStorageCredential#databricks_gcp_service_account}

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#full_name DataDatabricksStorageCredential#full_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#id DataDatabricksStorageCredential#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isolation_mode`<sup>Optional</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#isolation_mode DataDatabricksStorageCredential#isolation_mode}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#metastore_id DataDatabricksStorageCredential#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#name DataDatabricksStorageCredential#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#owner DataDatabricksStorageCredential#owner}.

---

##### `read_only`<sup>Optional</sup> <a name="read_only" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#read_only DataDatabricksStorageCredential#read_only}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#updated_at DataDatabricksStorageCredential#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#updated_by DataDatabricksStorageCredential#updated_by}.

---

##### `used_for_managed_storage`<sup>Optional</sup> <a name="used_for_managed_storage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo.property.usedForManagedStorage"></a>

```python
used_for_managed_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#used_for_managed_storage DataDatabricksStorageCredential#used_for_managed_storage}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole <a name="DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole(
  role_arn: str,
  external_id: str = None,
  unity_catalog_iam_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#role_arn DataDatabricksStorageCredential#role_arn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#external_id DataDatabricksStorageCredential#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#unity_catalog_iam_arn DataDatabricksStorageCredential#unity_catalog_iam_arn}. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#role_arn DataDatabricksStorageCredential#role_arn}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#external_id DataDatabricksStorageCredential#external_id}.

---

##### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#unity_catalog_iam_arn DataDatabricksStorageCredential#unity_catalog_iam_arn}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#access_connector_id DataDatabricksStorageCredential#access_connector_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#managed_identity_id DataDatabricksStorageCredential#managed_identity_id}. |

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#access_connector_id DataDatabricksStorageCredential#access_connector_id}.

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}.

---

##### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#managed_identity_id DataDatabricksStorageCredential#managed_identity_id}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal(
  application_id: str,
  client_secret: str,
  directory_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#application_id DataDatabricksStorageCredential#application_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#client_secret DataDatabricksStorageCredential#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.directoryId">directory_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#directory_id DataDatabricksStorageCredential#directory_id}. |

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#application_id DataDatabricksStorageCredential#application_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#client_secret DataDatabricksStorageCredential#client_secret}.

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#directory_id DataDatabricksStorageCredential#directory_id}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken <a name="DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken(
  access_key_id: str,
  account_id: str,
  secret_access_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accessKeyId">access_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#access_key_id DataDatabricksStorageCredential#access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#account_id DataDatabricksStorageCredential#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#secret_access_key DataDatabricksStorageCredential#secret_access_key}. |

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#access_key_id DataDatabricksStorageCredential#access_key_id}.

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#account_id DataDatabricksStorageCredential#account_id}.

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#secret_access_key DataDatabricksStorageCredential#secret_access_key}.

---

### DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount <a name="DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount(
  credential_id: str = None,
  email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.credentialId">credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#email DataDatabricksStorageCredential#email}. |

---

##### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}.

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#email DataDatabricksStorageCredential#email}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetUnityCatalogIamArn">reset_unity_catalog_iam_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_id` <a name="reset_external_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_unity_catalog_iam_arn` <a name="reset_unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.resetUnityCatalogIamArn"></a>

```python
def reset_unity_catalog_iam_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArnInput">unity_catalog_iam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn_input`<sup>Optional</sup> <a name="unity_catalog_iam_arn_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArnInput"></a>

```python
unity_catalog_iam_arn_input: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn`<sup>Required</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetManagedIdentityId">reset_managed_identity_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_managed_identity_id` <a name="reset_managed_identity_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.resetManagedIdentityId"></a>

```python
def reset_managed_identity_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorIdInput">access_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityIdInput">managed_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorId">access_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityId">managed_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_connector_id_input`<sup>Optional</sup> <a name="access_connector_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorIdInput"></a>

```python
access_connector_id_input: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `managed_identity_id_input`<sup>Optional</sup> <a name="managed_identity_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityIdInput"></a>

```python
managed_identity_id_input: str
```

- *Type:* str

---

##### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.accessConnectorId"></a>

```python
access_connector_id: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `managed_identity_id`<sup>Required</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.managedIdentityId"></a>

```python
managed_identity_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryIdInput">directory_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryId">directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `directory_id_input`<sup>Optional</sup> <a name="directory_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryIdInput"></a>

```python
directory_id_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.directoryId"></a>

```python
directory_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyIdInput">access_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKeyInput">secret_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyId">access_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKey">secret_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_id_input`<sup>Optional</sup> <a name="access_key_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyIdInput"></a>

```python
access_key_id_input: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `secret_access_key_input`<sup>Optional</sup> <a name="secret_access_key_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKeyInput"></a>

```python
secret_access_key_input: str
```

- *Type:* str

---

##### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accessKeyId"></a>

```python
access_key_id: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.secretAccessKey"></a>

```python
secret_access_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetCredentialId">reset_credential_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetEmail">reset_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_id` <a name="reset_credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetCredentialId"></a>

```python
def reset_credential_id() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialIdInput">credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialId">credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_id_input`<sup>Optional</sup> <a name="credential_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialIdInput"></a>

```python
credential_id_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `credential_id`<sup>Required</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.credentialId"></a>

```python
credential_id: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

---


### DataDatabricksStorageCredentialStorageCredentialInfoOutputReference <a name="DataDatabricksStorageCredentialStorageCredentialInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_storage_credential

dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole">put_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity">put_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal">put_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken">put_cloudflare_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount">put_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAwsIamRole">reset_aws_iam_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureManagedIdentity">reset_azure_managed_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureServicePrincipal">reset_azure_service_principal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCloudflareApiToken">reset_cloudflare_api_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetDatabricksGcpServiceAccount">reset_databricks_gcp_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetIsolationMode">reset_isolation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetReadOnly">reset_read_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUsedForManagedStorage">reset_used_for_managed_storage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aws_iam_role` <a name="put_aws_iam_role" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole"></a>

```python
def put_aws_iam_role(
  role_arn: str,
  external_id: str = None,
  unity_catalog_iam_arn: str = None
) -> None
```

###### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#role_arn DataDatabricksStorageCredential#role_arn}.

---

###### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#external_id DataDatabricksStorageCredential#external_id}.

---

###### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAwsIamRole.parameter.unityCatalogIamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#unity_catalog_iam_arn DataDatabricksStorageCredential#unity_catalog_iam_arn}.

---

##### `put_azure_managed_identity` <a name="put_azure_managed_identity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity"></a>

```python
def put_azure_managed_identity(
  access_connector_id: str,
  credential_id: str = None,
  managed_identity_id: str = None
) -> None
```

###### `access_connector_id`<sup>Required</sup> <a name="access_connector_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity.parameter.accessConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#access_connector_id DataDatabricksStorageCredential#access_connector_id}.

---

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}.

---

###### `managed_identity_id`<sup>Optional</sup> <a name="managed_identity_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureManagedIdentity.parameter.managedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#managed_identity_id DataDatabricksStorageCredential#managed_identity_id}.

---

##### `put_azure_service_principal` <a name="put_azure_service_principal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal"></a>

```python
def put_azure_service_principal(
  application_id: str,
  client_secret: str,
  directory_id: str
) -> None
```

###### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#application_id DataDatabricksStorageCredential#application_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#client_secret DataDatabricksStorageCredential#client_secret}.

---

###### `directory_id`<sup>Required</sup> <a name="directory_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putAzureServicePrincipal.parameter.directoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#directory_id DataDatabricksStorageCredential#directory_id}.

---

##### `put_cloudflare_api_token` <a name="put_cloudflare_api_token" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken"></a>

```python
def put_cloudflare_api_token(
  access_key_id: str,
  account_id: str,
  secret_access_key: str
) -> None
```

###### `access_key_id`<sup>Required</sup> <a name="access_key_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken.parameter.accessKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#access_key_id DataDatabricksStorageCredential#access_key_id}.

---

###### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#account_id DataDatabricksStorageCredential#account_id}.

---

###### `secret_access_key`<sup>Required</sup> <a name="secret_access_key" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putCloudflareApiToken.parameter.secretAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#secret_access_key DataDatabricksStorageCredential#secret_access_key}.

---

##### `put_databricks_gcp_service_account` <a name="put_databricks_gcp_service_account" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount"></a>

```python
def put_databricks_gcp_service_account(
  credential_id: str = None,
  email: str = None
) -> None
```

###### `credential_id`<sup>Optional</sup> <a name="credential_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount.parameter.credentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#credential_id DataDatabricksStorageCredential#credential_id}.

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.putDatabricksGcpServiceAccount.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.0/docs/data-sources/storage_credential#email DataDatabricksStorageCredential#email}.

---

##### `reset_aws_iam_role` <a name="reset_aws_iam_role" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAwsIamRole"></a>

```python
def reset_aws_iam_role() -> None
```

##### `reset_azure_managed_identity` <a name="reset_azure_managed_identity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureManagedIdentity"></a>

```python
def reset_azure_managed_identity() -> None
```

##### `reset_azure_service_principal` <a name="reset_azure_service_principal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetAzureServicePrincipal"></a>

```python
def reset_azure_service_principal() -> None
```

##### `reset_cloudflare_api_token` <a name="reset_cloudflare_api_token" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCloudflareApiToken"></a>

```python
def reset_cloudflare_api_token() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_databricks_gcp_service_account` <a name="reset_databricks_gcp_service_account" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetDatabricksGcpServiceAccount"></a>

```python
def reset_databricks_gcp_service_account() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_isolation_mode` <a name="reset_isolation_mode" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetIsolationMode"></a>

```python
def reset_isolation_mode() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_read_only` <a name="reset_read_only" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetReadOnly"></a>

```python
def reset_read_only() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```

##### `reset_used_for_managed_storage` <a name="reset_used_for_managed_storage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.resetUsedForManagedStorage"></a>

```python
def reset_used_for_managed_storage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRole">aws_iam_role</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentity">azure_managed_identity</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipal">azure_service_principal</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiToken">cloudflare_api_token</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccount">databricks_gcp_service_account</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRoleInput">aws_iam_role_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentityInput">azure_managed_identity_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipalInput">azure_service_principal_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiTokenInput">cloudflare_api_token_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccountInput">databricks_gcp_service_account_input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.isolationModeInput">isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnlyInput">read_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorageInput">used_for_managed_storage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.isolationMode">isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnly">read_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorage">used_for_managed_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aws_iam_role`<sup>Required</sup> <a name="aws_iam_role" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRole"></a>

```python
aws_iam_role: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRoleOutputReference</a>

---

##### `azure_managed_identity`<sup>Required</sup> <a name="azure_managed_identity" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentity"></a>

```python
azure_managed_identity: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentityOutputReference</a>

---

##### `azure_service_principal`<sup>Required</sup> <a name="azure_service_principal" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipal"></a>

```python
azure_service_principal: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipalOutputReference</a>

---

##### `cloudflare_api_token`<sup>Required</sup> <a name="cloudflare_api_token" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiToken"></a>

```python
cloudflare_api_token: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiTokenOutputReference</a>

---

##### `databricks_gcp_service_account`<sup>Required</sup> <a name="databricks_gcp_service_account" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccount"></a>

```python
databricks_gcp_service_account: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccountOutputReference</a>

---

##### `aws_iam_role_input`<sup>Optional</sup> <a name="aws_iam_role_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.awsIamRoleInput"></a>

```python
aws_iam_role_input: DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole">DataDatabricksStorageCredentialStorageCredentialInfoAwsIamRole</a>

---

##### `azure_managed_identity_input`<sup>Optional</sup> <a name="azure_managed_identity_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureManagedIdentityInput"></a>

```python
azure_managed_identity_input: DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity">DataDatabricksStorageCredentialStorageCredentialInfoAzureManagedIdentity</a>

---

##### `azure_service_principal_input`<sup>Optional</sup> <a name="azure_service_principal_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.azureServicePrincipalInput"></a>

```python
azure_service_principal_input: DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal">DataDatabricksStorageCredentialStorageCredentialInfoAzureServicePrincipal</a>

---

##### `cloudflare_api_token_input`<sup>Optional</sup> <a name="cloudflare_api_token_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.cloudflareApiTokenInput"></a>

```python
cloudflare_api_token_input: DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken">DataDatabricksStorageCredentialStorageCredentialInfoCloudflareApiToken</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `databricks_gcp_service_account_input`<sup>Optional</sup> <a name="databricks_gcp_service_account_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.databricksGcpServiceAccountInput"></a>

```python
databricks_gcp_service_account_input: DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount">DataDatabricksStorageCredentialStorageCredentialInfoDatabricksGcpServiceAccount</a>

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `isolation_mode_input`<sup>Optional</sup> <a name="isolation_mode_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.isolationModeInput"></a>

```python
isolation_mode_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `read_only_input`<sup>Optional</sup> <a name="read_only_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnlyInput"></a>

```python
read_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `used_for_managed_storage_input`<sup>Optional</sup> <a name="used_for_managed_storage_input" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorageInput"></a>

```python
used_for_managed_storage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `isolation_mode`<sup>Required</sup> <a name="isolation_mode" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.isolationMode"></a>

```python
isolation_mode: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `read_only`<sup>Required</sup> <a name="read_only" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.readOnly"></a>

```python
read_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `used_for_managed_storage`<sup>Required</sup> <a name="used_for_managed_storage" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.usedForManagedStorage"></a>

```python
used_for_managed_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksStorageCredentialStorageCredentialInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksStorageCredential.DataDatabricksStorageCredentialStorageCredentialInfo">DataDatabricksStorageCredentialStorageCredentialInfo</a>

---



