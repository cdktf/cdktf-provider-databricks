# `databricks_mlflow_webhook`

Refer to the Terraform Registory for docs: [`databricks_mlflow_webhook`](https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook).

# `mlflowWebhook` Submodule <a name="`mlflowWebhook` Submodule" id="@cdktf/provider-databricks.mlflowWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowWebhook <a name="MlflowWebhook" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook databricks_mlflow_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  events: typing.List[str],
  description: str = None,
  http_url_spec: MlflowWebhookHttpUrlSpec = None,
  id: str = None,
  job_spec: MlflowWebhookJobSpec = None,
  model_name: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.httpUrlSpec">http_url_spec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.jobSpec">job_spec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.events"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `http_url_spec`<sup>Optional</sup> <a name="http_url_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.httpUrlSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_spec`<sup>Optional</sup> <a name="job_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.jobSpec"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.modelName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec">put_http_url_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec">put_job_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec">reset_http_url_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec">reset_job_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName">reset_model_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_http_url_spec` <a name="put_http_url_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec"></a>

```python
def put_http_url_spec(
  url: str,
  authorization: str = None,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  secret: str = None
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

###### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

###### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.enableSslVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

##### `put_job_spec` <a name="put_job_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec"></a>

```python
def put_job_spec(
  access_token: str,
  job_id: str,
  workspace_url: str = None
) -> None
```

###### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.accessToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

###### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.jobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

###### `workspace_url`<sup>Optional</sup> <a name="workspace_url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.workspaceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_http_url_spec` <a name="reset_http_url_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec"></a>

```python
def reset_http_url_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_spec` <a name="reset_job_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec"></a>

```python
def reset_job_spec() -> None
```

##### `reset_model_name` <a name="reset_model_name" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName"></a>

```python
def reset_model_name() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhook.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec">http_url_spec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec">job_spec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput">events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput">http_url_spec_input</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput">job_spec_input</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput">model_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events">events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName">model_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `http_url_spec`<sup>Required</sup> <a name="http_url_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec"></a>

```python
http_url_spec: MlflowWebhookHttpUrlSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a>

---

##### `job_spec`<sup>Required</sup> <a name="job_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec"></a>

```python
job_spec: MlflowWebhookJobSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `events_input`<sup>Optional</sup> <a name="events_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput"></a>

```python
events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `http_url_spec_input`<sup>Optional</sup> <a name="http_url_spec_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput"></a>

```python
http_url_spec_input: MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_spec_input`<sup>Optional</sup> <a name="job_spec_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput"></a>

```python
job_spec_input: MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `model_name_input`<sup>Optional</sup> <a name="model_name_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput"></a>

```python
model_name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `model_name`<sup>Required</sup> <a name="model_name" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowWebhookConfig <a name="MlflowWebhookConfig" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  events: typing.List[str],
  description: str = None,
  http_url_spec: MlflowWebhookHttpUrlSpec = None,
  id: str = None,
  job_spec: MlflowWebhookJobSpec = None,
  model_name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events">events</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec">http_url_spec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec">job_spec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName">model_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events"></a>

```python
events: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `http_url_spec`<sup>Optional</sup> <a name="http_url_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec"></a>

```python
http_url_spec: MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_spec`<sup>Optional</sup> <a name="job_spec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec"></a>

```python
job_spec: MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `model_name`<sup>Optional</sup> <a name="model_name" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName"></a>

```python
model_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

### MlflowWebhookHttpUrlSpec <a name="MlflowWebhookHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookHttpUrlSpec(
  url: str,
  authorization: str = None,
  enable_ssl_verification: typing.Union[bool, IResolvable] = None,
  secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

##### `enable_ssl_verification`<sup>Optional</sup> <a name="enable_ssl_verification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

### MlflowWebhookJobSpec <a name="MlflowWebhookJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookJobSpec(
  access_token: str,
  job_id: str,
  workspace_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken">access_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId">job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}. |

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

##### `workspace_url`<sup>Optional</sup> <a name="workspace_url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.24.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlflowWebhookHttpUrlSpecOutputReference <a name="MlflowWebhookHttpUrlSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification">reset_enable_ssl_verification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization` <a name="reset_authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_enable_ssl_verification` <a name="reset_enable_ssl_verification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification"></a>

```python
def reset_enable_ssl_verification() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput">enable_ssl_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification">enable_ssl_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `enable_ssl_verification_input`<sup>Optional</sup> <a name="enable_ssl_verification_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput"></a>

```python
enable_ssl_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `enable_ssl_verification`<sup>Required</sup> <a name="enable_ssl_verification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification"></a>

```python
enable_ssl_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue"></a>

```python
internal_value: MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---


### MlflowWebhookJobSpecOutputReference <a name="MlflowWebhookJobSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_webhook

mlflowWebhook.MlflowWebhookJobSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl">reset_workspace_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_url` <a name="reset_workspace_url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl"></a>

```python
def reset_workspace_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput">access_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput">workspace_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken">access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl">workspace_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_token_input`<sup>Optional</sup> <a name="access_token_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput"></a>

```python
access_token_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `workspace_url_input`<sup>Optional</sup> <a name="workspace_url_input" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput"></a>

```python
workspace_url_input: str
```

- *Type:* str

---

##### `access_token`<sup>Required</sup> <a name="access_token" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken"></a>

```python
access_token: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `workspace_url`<sup>Required</sup> <a name="workspace_url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl"></a>

```python
workspace_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue"></a>

```python
internal_value: MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---



