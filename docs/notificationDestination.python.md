# `notificationDestination` Submodule <a name="`notificationDestination` Submodule" id="@cdktf/provider-databricks.notificationDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationDestination <a name="NotificationDestination" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination databricks_notification_destination}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestination(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  config: NotificationDestinationConfigA = None,
  destination_type: str = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.destinationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_config` <a name="put_config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig"></a>

```python
def put_config(
  email: NotificationDestinationConfigEmail = None,
  generic_webhook: NotificationDestinationConfigGenericWebhook = None,
  microsoft_teams: NotificationDestinationConfigMicrosoftTeams = None,
  pagerduty: NotificationDestinationConfigPagerduty = None,
  slack: NotificationDestinationConfigSlack = None
) -> None
```

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.email"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#email NotificationDestination#email}

---

###### `generic_webhook`<sup>Optional</sup> <a name="generic_webhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.genericWebhook"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

generic_webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}

---

###### `microsoft_teams`<sup>Optional</sup> <a name="microsoft_teams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.microsoftTeams"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}

---

###### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.pagerduty"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}

---

###### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.putConfig.parameter.slack"></a>

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#slack NotificationDestination#slack}

---

##### `reset_config` <a name="reset_config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestination.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NotificationDestination resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NotificationDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NotificationDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.configInput">config_input</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.config"></a>

```python
config: NotificationDestinationConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference">NotificationDestinationConfigAOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.configInput"></a>

```python
config_input: NotificationDestinationConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.notificationDestination.NotificationDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationDestinationConfig <a name="NotificationDestinationConfig" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  config: NotificationDestinationConfigA = None,
  destination_type: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#id NotificationDestination#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#display_name NotificationDestination#display_name}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.config"></a>

```python
config: NotificationDestinationConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#config NotificationDestination#config}

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#destination_type NotificationDestination#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#id NotificationDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### NotificationDestinationConfigA <a name="NotificationDestinationConfigA" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigA(
  email: NotificationDestinationConfigEmail = None,
  generic_webhook: NotificationDestinationConfigGenericWebhook = None,
  microsoft_teams: NotificationDestinationConfigMicrosoftTeams = None,
  pagerduty: NotificationDestinationConfigPagerduty = None,
  slack: NotificationDestinationConfigSlack = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email">email</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook">generic_webhook</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | generic_webhook block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams">microsoft_teams</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | microsoft_teams block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | pagerduty block. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | slack block. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.email"></a>

```python
email: NotificationDestinationConfigEmail
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#email NotificationDestination#email}

---

##### `generic_webhook`<sup>Optional</sup> <a name="generic_webhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.genericWebhook"></a>

```python
generic_webhook: NotificationDestinationConfigGenericWebhook
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

generic_webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#generic_webhook NotificationDestination#generic_webhook}

---

##### `microsoft_teams`<sup>Optional</sup> <a name="microsoft_teams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.microsoftTeams"></a>

```python
microsoft_teams: NotificationDestinationConfigMicrosoftTeams
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

microsoft_teams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#microsoft_teams NotificationDestination#microsoft_teams}

---

##### `pagerduty`<sup>Optional</sup> <a name="pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.pagerduty"></a>

```python
pagerduty: NotificationDestinationConfigPagerduty
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

pagerduty block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#pagerduty NotificationDestination#pagerduty}

---

##### `slack`<sup>Optional</sup> <a name="slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA.property.slack"></a>

```python
slack: NotificationDestinationConfigSlack
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

slack block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#slack NotificationDestination#slack}

---

### NotificationDestinationConfigEmail <a name="NotificationDestinationConfigEmail" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigEmail(
  addresses: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}. |

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}.

---

### NotificationDestinationConfigGenericWebhook <a name="NotificationDestinationConfigGenericWebhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigGenericWebhook(
  password: str = None,
  password_set: typing.Union[bool, IResolvable] = None,
  url: str = None,
  url_set: typing.Union[bool, IResolvable] = None,
  username: str = None,
  username_set: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#password NotificationDestination#password}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet">password_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet">url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#username NotificationDestination#username}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet">username_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#password NotificationDestination#password}.

---

##### `password_set`<sup>Optional</sup> <a name="password_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.passwordSet"></a>

```python
password_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `url_set`<sup>Optional</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.urlSet"></a>

```python
url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#username NotificationDestination#username}.

---

##### `username_set`<sup>Optional</sup> <a name="username_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook.property.usernameSet"></a>

```python
username_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}.

---

### NotificationDestinationConfigMicrosoftTeams <a name="NotificationDestinationConfigMicrosoftTeams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigMicrosoftTeams(
  app_id: str = None,
  app_id_set: typing.Union[bool, IResolvable] = None,
  auth_secret: str = None,
  auth_secret_set: typing.Union[bool, IResolvable] = None,
  channel_url: str = None,
  channel_url_set: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None,
  tenant_id_set: typing.Union[bool, IResolvable] = None,
  url: str = None,
  url_set: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet">app_id_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret">auth_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet">auth_secret_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl">channel_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet">channel_url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet">tenant_id_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet">url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `app_id`<sup>Optional</sup> <a name="app_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}.

---

##### `app_id_set`<sup>Optional</sup> <a name="app_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.appIdSet"></a>

```python
app_id_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}.

---

##### `auth_secret`<sup>Optional</sup> <a name="auth_secret" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecret"></a>

```python
auth_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}.

---

##### `auth_secret_set`<sup>Optional</sup> <a name="auth_secret_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.authSecretSet"></a>

```python
auth_secret_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}.

---

##### `channel_url`<sup>Optional</sup> <a name="channel_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrl"></a>

```python
channel_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}.

---

##### `channel_url_set`<sup>Optional</sup> <a name="channel_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.channelUrlSet"></a>

```python
channel_url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}.

---

##### `tenant_id_set`<sup>Optional</sup> <a name="tenant_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.tenantIdSet"></a>

```python
tenant_id_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `url_set`<sup>Optional</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams.property.urlSet"></a>

```python
url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

### NotificationDestinationConfigPagerduty <a name="NotificationDestinationConfigPagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigPagerduty(
  integration_key: str = None,
  integration_key_set: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey">integration_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet">integration_key_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}. |

---

##### `integration_key`<sup>Optional</sup> <a name="integration_key" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}.

---

##### `integration_key_set`<sup>Optional</sup> <a name="integration_key_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty.property.integrationKeySet"></a>

```python
integration_key_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}.

---

### NotificationDestinationConfigSlack <a name="NotificationDestinationConfigSlack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigSlack(
  channel_id: str = None,
  channel_id_set: typing.Union[bool, IResolvable] = None,
  oauth_token: str = None,
  oauth_token_set: typing.Union[bool, IResolvable] = None,
  url: str = None,
  url_set: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId">channel_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet">channel_id_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet">oauth_token_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet">url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}. |

---

##### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}.

---

##### `channel_id_set`<sup>Optional</sup> <a name="channel_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.channelIdSet"></a>

```python
channel_id_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}.

---

##### `oauth_token_set`<sup>Optional</sup> <a name="oauth_token_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.oauthTokenSet"></a>

```python
oauth_token_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

##### `url_set`<sup>Optional</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack.property.urlSet"></a>

```python
url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationDestinationConfigAOutputReference <a name="NotificationDestinationConfigAOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail">put_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook">put_generic_webhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams">put_microsoft_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty">put_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack">put_slack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook">reset_generic_webhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams">reset_microsoft_teams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty">reset_pagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack">reset_slack</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_email` <a name="put_email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail"></a>

```python
def put_email(
  addresses: typing.List[str] = None
) -> None
```

###### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putEmail.parameter.addresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#addresses NotificationDestination#addresses}.

---

##### `put_generic_webhook` <a name="put_generic_webhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook"></a>

```python
def put_generic_webhook(
  password: str = None,
  password_set: typing.Union[bool, IResolvable] = None,
  url: str = None,
  url_set: typing.Union[bool, IResolvable] = None,
  username: str = None,
  username_set: typing.Union[bool, IResolvable] = None
) -> None
```

###### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#password NotificationDestination#password}.

---

###### `password_set`<sup>Optional</sup> <a name="password_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.passwordSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#password_set NotificationDestination#password_set}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

###### `url_set`<sup>Optional</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.urlSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

###### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#username NotificationDestination#username}.

---

###### `username_set`<sup>Optional</sup> <a name="username_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putGenericWebhook.parameter.usernameSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#username_set NotificationDestination#username_set}.

---

##### `put_microsoft_teams` <a name="put_microsoft_teams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams"></a>

```python
def put_microsoft_teams(
  app_id: str = None,
  app_id_set: typing.Union[bool, IResolvable] = None,
  auth_secret: str = None,
  auth_secret_set: typing.Union[bool, IResolvable] = None,
  channel_url: str = None,
  channel_url_set: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None,
  tenant_id_set: typing.Union[bool, IResolvable] = None,
  url: str = None,
  url_set: typing.Union[bool, IResolvable] = None
) -> None
```

###### `app_id`<sup>Optional</sup> <a name="app_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#app_id NotificationDestination#app_id}.

---

###### `app_id_set`<sup>Optional</sup> <a name="app_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.appIdSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#app_id_set NotificationDestination#app_id_set}.

---

###### `auth_secret`<sup>Optional</sup> <a name="auth_secret" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.authSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#auth_secret NotificationDestination#auth_secret}.

---

###### `auth_secret_set`<sup>Optional</sup> <a name="auth_secret_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.authSecretSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#auth_secret_set NotificationDestination#auth_secret_set}.

---

###### `channel_url`<sup>Optional</sup> <a name="channel_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.channelUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_url NotificationDestination#channel_url}.

---

###### `channel_url_set`<sup>Optional</sup> <a name="channel_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.channelUrlSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_url_set NotificationDestination#channel_url_set}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#tenant_id NotificationDestination#tenant_id}.

---

###### `tenant_id_set`<sup>Optional</sup> <a name="tenant_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.tenantIdSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#tenant_id_set NotificationDestination#tenant_id_set}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

###### `url_set`<sup>Optional</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putMicrosoftTeams.parameter.urlSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `put_pagerduty` <a name="put_pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty"></a>

```python
def put_pagerduty(
  integration_key: str = None,
  integration_key_set: typing.Union[bool, IResolvable] = None
) -> None
```

###### `integration_key`<sup>Optional</sup> <a name="integration_key" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty.parameter.integrationKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#integration_key NotificationDestination#integration_key}.

---

###### `integration_key_set`<sup>Optional</sup> <a name="integration_key_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putPagerduty.parameter.integrationKeySet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#integration_key_set NotificationDestination#integration_key_set}.

---

##### `put_slack` <a name="put_slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack"></a>

```python
def put_slack(
  channel_id: str = None,
  channel_id_set: typing.Union[bool, IResolvable] = None,
  oauth_token: str = None,
  oauth_token_set: typing.Union[bool, IResolvable] = None,
  url: str = None,
  url_set: typing.Union[bool, IResolvable] = None
) -> None
```

###### `channel_id`<sup>Optional</sup> <a name="channel_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.channelId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_id NotificationDestination#channel_id}.

---

###### `channel_id_set`<sup>Optional</sup> <a name="channel_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.channelIdSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#channel_id_set NotificationDestination#channel_id_set}.

---

###### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.oauthToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#oauth_token NotificationDestination#oauth_token}.

---

###### `oauth_token_set`<sup>Optional</sup> <a name="oauth_token_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.oauthTokenSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#oauth_token_set NotificationDestination#oauth_token_set}.

---

###### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url NotificationDestination#url}.

---

###### `url_set`<sup>Optional</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.putSlack.parameter.urlSet"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/notification_destination#url_set NotificationDestination#url_set}.

---

##### `reset_email` <a name="reset_email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_generic_webhook` <a name="reset_generic_webhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetGenericWebhook"></a>

```python
def reset_generic_webhook() -> None
```

##### `reset_microsoft_teams` <a name="reset_microsoft_teams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetMicrosoftTeams"></a>

```python
def reset_microsoft_teams() -> None
```

##### `reset_pagerduty` <a name="reset_pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetPagerduty"></a>

```python
def reset_pagerduty() -> None
```

##### `reset_slack` <a name="reset_slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.resetSlack"></a>

```python
def reset_slack() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook">generic_webhook</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams">microsoft_teams</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty">pagerduty</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack">slack</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput">email_input</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput">generic_webhook_input</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput">microsoft_teams_input</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput">pagerduty_input</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput">slack_input</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.email"></a>

```python
email: NotificationDestinationConfigEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference">NotificationDestinationConfigEmailOutputReference</a>

---

##### `generic_webhook`<sup>Required</sup> <a name="generic_webhook" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhook"></a>

```python
generic_webhook: NotificationDestinationConfigGenericWebhookOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference">NotificationDestinationConfigGenericWebhookOutputReference</a>

---

##### `microsoft_teams`<sup>Required</sup> <a name="microsoft_teams" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeams"></a>

```python
microsoft_teams: NotificationDestinationConfigMicrosoftTeamsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference">NotificationDestinationConfigMicrosoftTeamsOutputReference</a>

---

##### `pagerduty`<sup>Required</sup> <a name="pagerduty" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerduty"></a>

```python
pagerduty: NotificationDestinationConfigPagerdutyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference">NotificationDestinationConfigPagerdutyOutputReference</a>

---

##### `slack`<sup>Required</sup> <a name="slack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slack"></a>

```python
slack: NotificationDestinationConfigSlackOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference">NotificationDestinationConfigSlackOutputReference</a>

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.emailInput"></a>

```python
email_input: NotificationDestinationConfigEmail
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---

##### `generic_webhook_input`<sup>Optional</sup> <a name="generic_webhook_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.genericWebhookInput"></a>

```python
generic_webhook_input: NotificationDestinationConfigGenericWebhook
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---

##### `microsoft_teams_input`<sup>Optional</sup> <a name="microsoft_teams_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.microsoftTeamsInput"></a>

```python
microsoft_teams_input: NotificationDestinationConfigMicrosoftTeams
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---

##### `pagerduty_input`<sup>Optional</sup> <a name="pagerduty_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.pagerdutyInput"></a>

```python
pagerduty_input: NotificationDestinationConfigPagerduty
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---

##### `slack_input`<sup>Optional</sup> <a name="slack_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.slackInput"></a>

```python
slack_input: NotificationDestinationConfigSlack
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigAOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigA">NotificationDestinationConfigA</a>

---


### NotificationDestinationConfigEmailOutputReference <a name="NotificationDestinationConfigEmailOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigEmailOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses">reset_addresses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_addresses` <a name="reset_addresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.resetAddresses"></a>

```python
def reset_addresses() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmailOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationConfigEmail
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigEmail">NotificationDestinationConfigEmail</a>

---


### NotificationDestinationConfigGenericWebhookOutputReference <a name="NotificationDestinationConfigGenericWebhookOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet">reset_password_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet">reset_url_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet">reset_username_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_password` <a name="reset_password" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_password_set` <a name="reset_password_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetPasswordSet"></a>

```python
def reset_password_set() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_url_set` <a name="reset_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUrlSet"></a>

```python
def reset_url_set() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_username_set` <a name="reset_username_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.resetUsernameSet"></a>

```python
def reset_username_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput">password_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput">url_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput">username_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet">password_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet">url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet">username_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `password_set_input`<sup>Optional</sup> <a name="password_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSetInput"></a>

```python
password_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url_set_input`<sup>Optional</sup> <a name="url_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSetInput"></a>

```python
url_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `username_set_input`<sup>Optional</sup> <a name="username_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSetInput"></a>

```python
username_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `password_set`<sup>Required</sup> <a name="password_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.passwordSet"></a>

```python
password_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_set`<sup>Required</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.urlSet"></a>

```python
url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `username_set`<sup>Required</sup> <a name="username_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.usernameSet"></a>

```python
username_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhookOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationConfigGenericWebhook
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigGenericWebhook">NotificationDestinationConfigGenericWebhook</a>

---


### NotificationDestinationConfigMicrosoftTeamsOutputReference <a name="NotificationDestinationConfigMicrosoftTeamsOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId">reset_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet">reset_app_id_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret">reset_auth_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet">reset_auth_secret_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl">reset_channel_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet">reset_channel_url_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet">reset_tenant_id_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet">reset_url_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_app_id` <a name="reset_app_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppId"></a>

```python
def reset_app_id() -> None
```

##### `reset_app_id_set` <a name="reset_app_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAppIdSet"></a>

```python
def reset_app_id_set() -> None
```

##### `reset_auth_secret` <a name="reset_auth_secret" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecret"></a>

```python
def reset_auth_secret() -> None
```

##### `reset_auth_secret_set` <a name="reset_auth_secret_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetAuthSecretSet"></a>

```python
def reset_auth_secret_set() -> None
```

##### `reset_channel_url` <a name="reset_channel_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrl"></a>

```python
def reset_channel_url() -> None
```

##### `reset_channel_url_set` <a name="reset_channel_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetChannelUrlSet"></a>

```python
def reset_channel_url_set() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```

##### `reset_tenant_id_set` <a name="reset_tenant_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetTenantIdSet"></a>

```python
def reset_tenant_id_set() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_url_set` <a name="reset_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.resetUrlSet"></a>

```python
def reset_url_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput">app_id_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput">auth_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput">auth_secret_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput">channel_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput">channel_url_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput">tenant_id_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput">url_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet">app_id_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret">auth_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet">auth_secret_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl">channel_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet">channel_url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet">tenant_id_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet">url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_id_set_input`<sup>Optional</sup> <a name="app_id_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSetInput"></a>

```python
app_id_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_secret_input`<sup>Optional</sup> <a name="auth_secret_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretInput"></a>

```python
auth_secret_input: str
```

- *Type:* str

---

##### `auth_secret_set_input`<sup>Optional</sup> <a name="auth_secret_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSetInput"></a>

```python
auth_secret_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `channel_url_input`<sup>Optional</sup> <a name="channel_url_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlInput"></a>

```python
channel_url_input: str
```

- *Type:* str

---

##### `channel_url_set_input`<sup>Optional</sup> <a name="channel_url_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSetInput"></a>

```python
channel_url_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `tenant_id_set_input`<sup>Optional</sup> <a name="tenant_id_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSetInput"></a>

```python
tenant_id_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url_set_input`<sup>Optional</sup> <a name="url_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSetInput"></a>

```python
url_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_id_set`<sup>Required</sup> <a name="app_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.appIdSet"></a>

```python
app_id_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auth_secret`<sup>Required</sup> <a name="auth_secret" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecret"></a>

```python
auth_secret: str
```

- *Type:* str

---

##### `auth_secret_set`<sup>Required</sup> <a name="auth_secret_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.authSecretSet"></a>

```python
auth_secret_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `channel_url`<sup>Required</sup> <a name="channel_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrl"></a>

```python
channel_url: str
```

- *Type:* str

---

##### `channel_url_set`<sup>Required</sup> <a name="channel_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.channelUrlSet"></a>

```python
channel_url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `tenant_id_set`<sup>Required</sup> <a name="tenant_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.tenantIdSet"></a>

```python
tenant_id_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_set`<sup>Required</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.urlSet"></a>

```python
url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeamsOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationConfigMicrosoftTeams
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigMicrosoftTeams">NotificationDestinationConfigMicrosoftTeams</a>

---


### NotificationDestinationConfigPagerdutyOutputReference <a name="NotificationDestinationConfigPagerdutyOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigPagerdutyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey">reset_integration_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet">reset_integration_key_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_integration_key` <a name="reset_integration_key" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKey"></a>

```python
def reset_integration_key() -> None
```

##### `reset_integration_key_set` <a name="reset_integration_key_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.resetIntegrationKeySet"></a>

```python
def reset_integration_key_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput">integration_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput">integration_key_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey">integration_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet">integration_key_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `integration_key_input`<sup>Optional</sup> <a name="integration_key_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeyInput"></a>

```python
integration_key_input: str
```

- *Type:* str

---

##### `integration_key_set_input`<sup>Optional</sup> <a name="integration_key_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySetInput"></a>

```python
integration_key_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `integration_key`<sup>Required</sup> <a name="integration_key" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKey"></a>

```python
integration_key: str
```

- *Type:* str

---

##### `integration_key_set`<sup>Required</sup> <a name="integration_key_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.integrationKeySet"></a>

```python
integration_key_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerdutyOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationConfigPagerduty
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigPagerduty">NotificationDestinationConfigPagerduty</a>

---


### NotificationDestinationConfigSlackOutputReference <a name="NotificationDestinationConfigSlackOutputReference" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import notification_destination

notificationDestination.NotificationDestinationConfigSlackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId">reset_channel_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet">reset_channel_id_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken">reset_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet">reset_oauth_token_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl">reset_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet">reset_url_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_channel_id` <a name="reset_channel_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelId"></a>

```python
def reset_channel_id() -> None
```

##### `reset_channel_id_set` <a name="reset_channel_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetChannelIdSet"></a>

```python
def reset_channel_id_set() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

##### `reset_oauth_token_set` <a name="reset_oauth_token_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetOauthTokenSet"></a>

```python
def reset_oauth_token_set() -> None
```

##### `reset_url` <a name="reset_url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrl"></a>

```python
def reset_url() -> None
```

##### `reset_url_set` <a name="reset_url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.resetUrlSet"></a>

```python
def reset_url_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput">channel_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput">channel_id_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput">oauth_token_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput">url_set_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId">channel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet">channel_id_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet">oauth_token_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet">url_set</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `channel_id_input`<sup>Optional</sup> <a name="channel_id_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdInput"></a>

```python
channel_id_input: str
```

- *Type:* str

---

##### `channel_id_set_input`<sup>Optional</sup> <a name="channel_id_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSetInput"></a>

```python
channel_id_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `oauth_token_set_input`<sup>Optional</sup> <a name="oauth_token_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSetInput"></a>

```python
oauth_token_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url_set_input`<sup>Optional</sup> <a name="url_set_input" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSetInput"></a>

```python
url_set_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `channel_id`<sup>Required</sup> <a name="channel_id" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelId"></a>

```python
channel_id: str
```

- *Type:* str

---

##### `channel_id_set`<sup>Required</sup> <a name="channel_id_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.channelIdSet"></a>

```python
channel_id_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `oauth_token_set`<sup>Required</sup> <a name="oauth_token_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.oauthTokenSet"></a>

```python
oauth_token_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `url_set`<sup>Required</sup> <a name="url_set" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.urlSet"></a>

```python
url_set: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlackOutputReference.property.internalValue"></a>

```python
internal_value: NotificationDestinationConfigSlack
```

- *Type:* <a href="#@cdktf/provider-databricks.notificationDestination.NotificationDestinationConfigSlack">NotificationDestinationConfigSlack</a>

---



